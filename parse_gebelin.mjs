// Parse the Court de Gebelin (1781) tarot essay (Donald Tyson trans.)
// Each Major has 1-3 paragraphs of literary commentary.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAJORS } from './cards.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = fs.readFileSync(path.join(__dirname, 'sources/gebelin/gebelin.txt'), 'utf8');

// Strategy: scan section headings. Gebelin/Tyson uses "Number N" or "Numbers N, M, ..." followed by
// "The X." on next line. Sections can be either single-card or group-card.

// Map roman to canonical Major name
const ROMAN_TO_MAJOR = {
  '0': '0 The Fool', 'I': 'I The Magician', 'II': 'II The High Priestess',
  'III': 'III The Empress', 'IV': 'IV The Emperor', 'V': 'V The Hierophant',
  'VI': 'VI The Lovers', 'VII': 'VII The Chariot', 'VIII': 'VIII Strength',
  'IX': 'IX The Hermit', 'X': 'X Wheel of Fortune', 'XI': 'XI Justice',
  'XII': 'XII The Hanged Man', 'XIII': 'XIII Death', 'XIV': 'XIV Temperance',
  'XV': 'XV The Devil', 'XVI': 'XVI The Tower', 'XVII': 'XVII The Star',
  'XVIII': 'XVIII The Moon', 'XIX': 'XIX The Sun', 'XX': 'XX Judgement',
  'XXI': 'XXI The World',
};
// Gebelin uses Fortitude (XI) where modern has Strength, and Justice (VIII) and Strength swapped
// from Waite's reordering. He uses Prudence (XII) for Hanged Man.

const lines = src.split(/\n/).map(s => s.replace(/\s+$/, ''));
const out = {};

// Find all heading lines: "Number X" or "Numbers X, Y, ..."
const HEAD_RE = /^\s+Numbers?\s+([IVX0-9]+(?:\s*,\s*[IVX0-9]+)*)\b/i;
const headings = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(HEAD_RE);
  if (!m) continue;
  const nums = m[1].split(',').map(s => s.trim()).filter(Boolean);
  // The line after may be the named title "The X." — capture it for context
  let title = '';
  if (lines[i+1] && /^\s+[A-Z]/.test(lines[i+1])) title = lines[i+1].trim();
  headings.push({ idx: i, nums, title });
}

console.error(`found ${headings.length} headings`);

// For each heading, body is from idx+1 (or +2 if title) up to next heading
for (let h = 0; h < headings.length; h++) {
  const { idx, nums, title } = headings[h];
  const end = h + 1 < headings.length ? headings[h+1].idx : lines.length;
  const start = idx + (title ? 2 : 1);
  let body = lines.slice(start, end).join('\n').trim();
  // Remove a few obvious junk patterns
  body = body.replace(/^[\n\s]+|[\n\s]+$/g, '').replace(/\n{3,}/g, '\n\n');
  if (body.length < 100) continue;
  // Attribute to all named majors in this section
  for (const n of nums) {
    const card = ROMAN_TO_MAJOR[n.toUpperCase()];
    if (!card) continue;
    const head = title ? `[Gébelin section: ${title}]` : `[Gébelin section]`;
    if (!out[card]) out[card] = `${head}\n${body}`;
    else out[card] += '\n\n' + `${head}\n${body}`;
  }
}

// Coverage
const missing = MAJORS.filter(m => !out[m]);
console.error(`Gebelin coverage: ${22 - missing.length}/22`);
if (missing.length) console.error('missing:', missing);

fs.writeFileSync(path.join(__dirname, 'sources/gebelin/majors.json'), JSON.stringify(out, null, 2));
console.error('wrote sources/gebelin/majors.json');
for (const m of MAJORS) {
  if (out[m]) console.error(`  ${m}: ${out[m].length} chars`);
}
