// Build the structural-correlation index.
// For every pair (A, B) of the 78 cards, compute the relationship vector
// and store a small set of literary "fragments" for each card so the
// browser can stitch a correlation sentence at draw-time.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DECK_78, MAJORS } from './cards.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/base.json'), 'utf8'));
const waiteEssays = JSON.parse(fs.readFileSync(path.join(__dirname, 'sources/waite/majors_essays.json'), 'utf8'));
const gebelin = JSON.parse(fs.readFileSync(path.join(__dirname, 'sources/gebelin/majors.json'), 'utf8'));

// Element resolution helper
const ELEMENT_OF_SUIT = { 'Wands': 'Fire', 'Cups': 'Water', 'Swords': 'Air', 'Pentacles': 'Earth' };
const ELEMENT_PAIRS = {
  // Symmetric. Pair-key = sorted [a,b].join('|').
  'Fire|Fire': 'resonance', 'Water|Water': 'resonance',
  'Air|Air': 'resonance', 'Earth|Earth': 'resonance',
  'Air|Fire': 'fanning',     // Air feeds Fire
  'Fire|Water': 'opposition', 'Earth|Water': 'nurture',
  'Air|Earth': 'denial', 'Earth|Fire': 'fuel',
  'Air|Water': 'evaporation',
};

function getElement(card) {
  if (card.suit) return ELEMENT_OF_SUIT[card.suit];
  // Major: pull from GD attribution
  const g = card.golden_dawn;
  if (!g.element) return null;
  const e = g.element.split(/[ ;]/)[0]; // "Fire (mother letter)" -> "Fire"
  return e;
}

function elementPair(a, b) {
  if (!a || !b) return null;
  const k = [a, b].sort().join('|');
  return ELEMENT_PAIRS[k] || null;
}

function suitRelation(a, b) {
  if (a.suit && b.suit) {
    if (a.suit === b.suit) return 'same-suit';
    return 'cross-suit';
  }
  if (a.arcana === 'major' && b.arcana === 'major') return 'two-majors';
  return 'major-minor';
}

// Decan adjacency for minor numbered cards
function decanInfo(card) {
  const a = card.golden_dawn?.attribution;
  if (!a) return null;
  const m = a.match(/^(\w+)\s+in\s+(\w+)/);
  if (!m) return null;
  return { planet: m[1], sign: m[2] };
}

function decanRelation(a, b) {
  const da = decanInfo(a), db = decanInfo(b);
  if (!da || !db) return null;
  if (da.sign === db.sign) return 'same-sign';
  if (da.planet === db.planet) return 'same-ruler';
  // Opposed signs (basic table)
  const OPP = { Aries: 'Libra', Taurus: 'Scorpio', Gemini: 'Sagittarius',
                Cancer: 'Capricorn', Leo: 'Aquarius', Virgo: 'Pisces' };
  const opp = OPP[da.sign] || Object.entries(OPP).find(([_, v]) => v === da.sign)?.[0];
  if (opp === db.sign) return 'opposed-signs';
  return null;
}

// Major sequence relationship (Fool's Journey)
function majorSequence(a, b) {
  if (a.arcana !== 'major' || b.arcana !== 'major') return null;
  const num = (n) => {
    if (n.name.startsWith('0 ')) return 0;
    const m = n.name.match(/^([IVX]+)\s/);
    if (!m) return null;
    const r = m[1];
    const map = { I:1, II:2, III:3, IV:4, V:5, VI:6, VII:7, VIII:8, IX:9, X:10,
                  XI:11, XII:12, XIII:13, XIV:14, XV:15, XVI:16, XVII:17,
                  XVIII:18, XIX:19, XX:20, XXI:21 };
    return map[r];
  };
  const na = num(a), nb = num(b);
  if (na == null || nb == null) return null;
  const d = Math.abs(na - nb);
  if (d === 1) return 'adjacent';
  if (d === 0) return 'self';
  if (na + nb === 21) return 'mirror-21';
  return d <= 3 ? 'near' : 'far';
}

// Build literary fragments per card
function fragmentsFor(name) {
  const card = base.cards[name];
  const frags = { name, fragments: [] };

  // 1. Waite divinatory keyword (always present)
  if (card.upright.waite) {
    frags.fragments.push({ kind: 'waite-keyword', orientation: 'upright', text: card.upright.waite });
  }
  if (card.reversed.waite) {
    frags.fragments.push({ kind: 'waite-keyword', orientation: 'reversed', text: card.reversed.waite });
  }

  // 2. Etteilla
  if (card.upright.etteilla) {
    const first = card.upright.etteilla.split(',').slice(0, 4).join(',').trim();
    frags.fragments.push({ kind: 'etteilla', orientation: 'upright', text: first });
  }
  if (card.reversed.etteilla) {
    const first = card.reversed.etteilla.split(',').slice(0, 4).join(',').trim();
    frags.fragments.push({ kind: 'etteilla', orientation: 'reversed', text: first });
  }

  // 3. Waite Part 2 essay (Majors): first 1-2 sentences (rich literary)
  if (waiteEssays[name]) {
    const e = waiteEssays[name];
    // Pull the first complete sentence-ending unit ~ 200 chars
    const m = e.match(/^([^.]+\.[^.]+\.)/);
    if (m) frags.fragments.push({ kind: 'waite-essay', text: m[1].trim() });
  }

  // 4. Gebelin (Majors): clip the second paragraph if exists (often the imagery)
  if (gebelin[name]) {
    const g = gebelin[name].replace(/^\[Gébelin section: [^\]]+\]\n/, '');
    // First 250 chars / nearest sentence
    let clip = g.slice(0, 300);
    const lastDot = clip.lastIndexOf('.');
    if (lastDot > 100) clip = clip.slice(0, lastDot + 1);
    frags.fragments.push({ kind: 'gebelin', text: clip.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim() });
  }

  // 5. Waite iconographic description for Minors (already in base.json)
  if (card.image) {
    frags.fragments.push({ kind: 'image', text: card.image });
  }

  // 6. GD attribution as a fragment
  if (card.golden_dawn.thoth_title) {
    frags.fragments.push({ kind: 'thoth-title', text: `Crowley titles it '${card.golden_dawn.thoth_title}'` });
  }
  if (card.golden_dawn.attribution) {
    frags.fragments.push({ kind: 'gd-attribution', text: card.golden_dawn.attribution });
  }

  return frags;
}

const fragmentsIndex = {};
for (const name of DECK_78) fragmentsIndex[name] = fragmentsFor(name);

// Build relationship matrix
const rels = {};
for (const a of DECK_78) {
  rels[a] = {};
  for (const b of DECK_78) {
    if (a === b) continue;
    const cardA = base.cards[a], cardB = base.cards[b];
    const r = {
      suit: suitRelation(cardA, cardB),
      element: elementPair(getElement(cardA), getElement(cardB)),
      decan: decanRelation(cardA, cardB),
      majorSeq: majorSequence(cardA, cardB),
    };
    // Pick the most-specific relationship label
    const labels = [];
    if (r.majorSeq === 'mirror-21') labels.push('mirror');
    if (r.majorSeq === 'adjacent') labels.push('sequential');
    if (r.decan === 'opposed-signs') labels.push('astrological-opposition');
    if (r.decan === 'same-sign') labels.push('decanic-co-residence');
    if (r.decan === 'same-ruler') labels.push('planetary-rhyme');
    if (r.element === 'opposition') labels.push('elemental-opposition');
    if (r.element === 'resonance') labels.push('elemental-resonance');
    if (r.element === 'fanning' || r.element === 'fuel' || r.element === 'nurture') labels.push('elemental-feeding');
    if (r.element === 'evaporation' || r.element === 'denial') labels.push('elemental-undermining');
    if (r.suit === 'same-suit' && !labels.length) labels.push('shared-suit');
    if (!labels.length) labels.push('disjoint');
    r.labels = labels;
    r.primary = labels[0];
    rels[a][b] = r;
  }
}

const outDir = path.join(__dirname, 'data');
fs.writeFileSync(path.join(outDir, 'fragments.json'), JSON.stringify(fragmentsIndex, null, 2));
fs.writeFileSync(path.join(outDir, 'relations.json'), JSON.stringify(rels, null, 2));
console.error(`wrote fragments.json (${(fs.statSync(path.join(outDir,'fragments.json')).size/1024).toFixed(1)}KB)`);
console.error(`wrote relations.json (${(fs.statSync(path.join(outDir,'relations.json')).size/1024).toFixed(1)}KB)`);

// Distribution of primary relationships
const counts = {};
for (const a of DECK_78) for (const b of DECK_78) {
  if (a === b) continue;
  const p = rels[a][b].primary;
  counts[p] = (counts[p] || 0) + 1;
}
console.error('primary relationship distribution:');
for (const [k, v] of Object.entries(counts).sort((a,b) => b[1]-a[1])) console.error(`  ${k}: ${v}`);
