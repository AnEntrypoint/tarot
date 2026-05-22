// Parse Waite's Pictorial Key Part II — the iconographic / literary essays
// on each Major. Each card is preceded by a one-line heading naming it,
// then 1-3 paragraphs of rich prose.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAJORS } from './cards.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = fs.readFileSync(path.join(__dirname, 'sources/waite/part2.txt'), 'utf8')
  .replace(/&#\d+;|&#x[0-9a-f]+;/gi, ' ')
  .replace(/[​ ]/g, ' ')
  .replace(/[ \t]+/g, ' ');
const lines = raw.split(/\n+/).map(s => s.trim()).filter(Boolean);

// Build short-name lookup for the 22 Majors
function shortName(full) {
  // "0 The Fool" -> "the fool"
  return full.replace(/^[IVX0-9]+\s*/, '').toLowerCase();
}
const SHORTS = MAJORS.map(n => ({ full: n, short: shortName(n) }));

// Waite uses several spellings; normalize lookups
const ALIASES = new Map([
  ['fortitude', 'strength'],
  ['the last judgment', 'judgement'],
  ['judgment', 'judgement'],
  ['the world or universe', 'the world'],
]);
function normName(s) {
  let l = s.toLowerCase().trim().replace(/\.$/, '');
  if (ALIASES.has(l)) l = ALIASES.get(l);
  return l;
}

// Walk lines. A line that consists ONLY of a short Major name (with optional roman) is a heading.
const HEADING = /^(?:[IVX0-9]+\s+)?(?:Zero\s+)?(The\s+\w[\w\s']*|Strength,?\s*(?:or\s+Fortitude)?|Fortitude|Justice|Death|Temperance|Judgement|Judgment|The\s+Last\s+Judgment|Wheel\s+of\s+Fortune)\s*\.?\s*$/i;

const out = {};
let cur = null;
let buf = [];
function flush() {
  if (!cur) return;
  const text = buf.join('\n\n').trim();
  if (text.length > 100) {
    if (!out[cur]) out[cur] = text;
    else out[cur] += '\n\n' + text;
  }
  buf = [];
}

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (l.length > 80) { // long line = body paragraph
    if (cur) buf.push(l);
    continue;
  }
  const m = l.match(HEADING);
  if (m) {
    const candidate = normName(m[1]);
    // Match against the 22 Majors by short name
    const major = SHORTS.find(s => s.short === candidate || s.short.includes(candidate) || candidate.includes(s.short));
    if (major) {
      flush();
      cur = major.full;
      continue;
    }
  }
  // Otherwise: short line that isn't a heading — likely junk, ignore.
}
flush();

const missing = MAJORS.filter(m => !out[m] || out[m].length < 200);
console.error(`Part 2 coverage: ${22 - missing.length}/22`);
if (missing.length) console.error('missing or short:', missing);
fs.writeFileSync(path.join(__dirname, 'sources/waite/majors_essays.json'), JSON.stringify(out, null, 2));
console.error('wrote majors_essays.json');

// Also show length distribution
for (const m of MAJORS) {
  if (out[m]) console.error(`  ${m}: ${out[m].length} chars`);
}
