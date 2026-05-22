// Parse Waite's Pictorial Key Part III for all 78 cards.
// Three sub-sections:
//  § 2 Lesser Arcana — long descriptions, suit header then rank header then prose.
//  § 3 Greater Arcana — compact "N. Card.—upright. Reversed: ..." entries.
//  § 4 Additional Lesser meanings — "Rank.—..." entries grouped by suit.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DECK_78, MAJORS } from './cards.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = fs.readFileSync(path.join(__dirname, 'sources/waite/part3.txt'), 'utf8')
  .replace(/&#\d+;|&#x[0-9a-f]+;/gi, ' ')
  .replace(/[​ ]/g, ' ')
  .replace(/[ \t]+/g, ' ');
const lines = raw.split(/\n+/).map(s => s.trim()).filter(Boolean);

const out = {}; // canonical name -> { image, upright, reversed, additional? }
const ensure = (n) => (out[n] = out[n] || {});

// --- § 3: Greater Arcana compact ---
// "1. The Magician.—Skill, ...Reversed: ..."
// "Zero. The Fool.—..."
const majorIdx = {
  '1': 'I The Magician', '2': 'II The High Priestess', '3': 'III The Empress',
  '4': 'IV The Emperor', '5': 'V The Hierophant', '6': 'VI The Lovers',
  '7': 'VII The Chariot', '8': 'VIII Strength', '9': 'IX The Hermit',
  '10': 'X Wheel of Fortune', '11': 'XI Justice', '12': 'XII The Hanged Man',
  '13': 'XIII Death', '14': 'XIV Temperance', '15': 'XV The Devil',
  '16': 'XVI The Tower', '17': 'XVII The Star', '18': 'XVIII The Moon',
  '19': 'XIX The Sun', '20': 'XX Judgement', '21': 'XXI The World',
  'zero': '0 The Fool',
};
const MAJOR_LINE = /^(?:(\d+)|Zero)\.\s+(?:The\s+)?([A-Za-z][A-Za-z' \-]+?)\.\s*[—–-]\s*(.+?)\s*Reversed\s*[: ]\s*(.+?)\.?\s*$/i;

for (const l of lines) {
  const m = l.match(MAJOR_LINE);
  if (!m) continue;
  const num = (m[1] || 'zero').toLowerCase();
  const card = majorIdx[num];
  if (!card) continue;
  const e = ensure(card);
  e.upright = m[3].trim();
  e.reversed = m[4].trim();
}

// --- § 2: Lesser Arcana long form ---
// Sequence: "THE SUIT OF X" -> rank token -> [maybe blank] -> long paragraph with "Divinatory Meanings: ... Reversed: ..."
const RANK_HEADS = ['King', 'Queen', 'Knight', 'Page', 'Squire', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'Ace'];
const SUIT_HEADS = { 'wands': 'Wands', 'cups': 'Cups', 'swords': 'Swords', 'pentacles': 'Pentacles' };

function findSuitHeader(text) {
  const m = text.match(/(?:^|\s)(?:THE\s+SUIT\s+OF\s+)?(WANDS|CUPS|SWORDS|PENTACLES)\s*$/i);
  return m ? SUIT_HEADS[m[1].toLowerCase()] : null;
}

let curSuit = null;
let curRank = null;
const PARA_DIV = /Divinatory Meanings\s*[: ]\s*([\s\S]*?)(?:\s*Reversed\s*[: ]\s*([\s\S]+?))?\s*$/i;

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  const suit = findSuitHeader(l);
  if (suit) { curSuit = suit; curRank = null; continue; }
  // Rank heading: a line whose entire content is one of the rank tokens
  if (RANK_HEADS.includes(l)) { curRank = l === 'Squire' ? 'Page' : l; continue; }
  // Divinatory paragraph
  if (/Divinatory Meanings/i.test(l) && curSuit && curRank) {
    const m = l.match(PARA_DIV);
    if (!m) continue;
    const name = `${curRank} of ${curSuit}`;
    if (!DECK_78.includes(name)) { console.error('unknown', name); continue; }
    const e = ensure(name);
    // The text BEFORE "Divinatory Meanings:" is the iconographic description.
    const di = l.indexOf('Divinatory Meanings');
    if (di > 0) e.image = l.slice(0, di).trim().replace(/[ \t]+/g, ' ');
    e.upright_long = m[1].trim();
    if (m[2]) e.reversed_long = m[2].trim();
  }
}

// --- § 4: Additional Lesser Meanings ---
// "Wands. King.—Generally favourable...Reversed: Advice that should be followed."
// "Queen.—A good harvest..." (suit inherited)
const ADD_LINE = /^(?:(Wands|Cups|Swords|Pentacles)\.\s+)?(King|Queen|Knight|Page|Squire|Ten|Nine|Eight|Seven|Six|Five|Four|Three|Two|Ace)\.\s*[—–-]\s*(.+?)\s*(?:Reversed\s*[: ]\s*(.+?))?\.?\s*$/i;
let addSuit = null;
let inAddSection = false;
for (const l of lines) {
  if (/SOME ADDITIONAL MEANINGS/i.test(l)) { inAddSection = true; continue; }
  if (!inAddSection) continue;
  const m = l.match(ADD_LINE);
  if (!m) continue;
  if (m[1]) addSuit = m[1];
  const rank = m[2] === 'Squire' ? 'Page' : m[2];
  if (!addSuit) continue;
  const name = `${rank} of ${addSuit}`;
  if (!DECK_78.includes(name)) continue;
  const e = ensure(name);
  e.additional_upright = m[3].trim();
  if (m[4]) e.additional_reversed = m[4].trim();
}

// Coverage report
const missingUp = DECK_78.filter(n => !out[n]?.upright && !out[n]?.upright_long && !out[n]?.additional_upright);
const missingRv = DECK_78.filter(n => !out[n]?.reversed && !out[n]?.reversed_long && !out[n]?.additional_reversed);
console.error(`upright coverage: ${78 - missingUp.length}/78`);
console.error(`reversed coverage: ${78 - missingRv.length}/78`);
if (missingUp.length) console.error('missing upright:', missingUp);
if (missingRv.length) console.error('missing reversed:', missingRv);

fs.writeFileSync(path.join(__dirname, 'sources/waite/by_card.json'), JSON.stringify(out, null, 2));
console.error(`wrote ${Object.keys(out).length} cards.`);
