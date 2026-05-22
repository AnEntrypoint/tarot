#!/usr/bin/env node
// Generate 468 short dialectical synthesis paragraphs:
// per (card, orientation, position) — 78 * 2 * 3 = 468.
// Staggered 1s apart, resumable, writes one JSON per (card,orient,pos).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DECK_78 } from './cards.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/base.json'), 'utf8'));
const OUT_DIR = path.join(__dirname, 'data/synth');
fs.mkdirSync(OUT_DIR, { recursive: true });
const LOG = path.join(__dirname, 'synth.log');

const BASE = process.env.CJ_BASE || 'https://chatjimmy.ai';
const MODEL = process.env.CJ_MODEL || 'llama3.1-8B';
const STAGGER_MS = parseInt(process.env.STAGGER_MS || '1000', 10);
const STATS_RE = /<\|stats\|>[\s\S]*?<\|\/stats\|>\s*$/g;

const POSITIONS = [
  { key: 'thesis',    note: "the proposition; the situation as it stands. Begin with a declarative clause that names what asserts itself." },
  { key: 'antithesis',note: "the opposing force; the contradiction the thesis cannot resolve. Foreground the tension; do not soothe it." },
  { key: 'synthesis', note: "the resolution; the higher unity that absorbs both. Not a compromise — a re-framing in which the tension dissolves." },
];

function log(...a) {
  const l = `[${new Date().toISOString()}] ${a.join(' ')}`;
  console.error(l);
  fs.appendFileSync(LOG, l + '\n');
}

function slug(name, orient, pos) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '__' + orient + '__' + pos;
}

function buildPrompt(card, orient, posObj) {
  const o = orient === 'upright' ? card.upright : card.reversed;
  const g = card.golden_dawn;
  const ettName = o.etteilla_name ? ` (Etteilla titles this '${o.etteilla_name}')` : '';
  const ettLine = `Etteilla (1785)${ettName}: ${o.etteilla || '(no keyword)'}`;
  const waiteLine = `Waite (1910): ${o.waite || '(no entry)'}`;
  const waiteAdd = o.waite_additional ? `\n  Waite additional: ${o.waite_additional}` : '';
  const gdParts = [];
  if (g.hebrew) gdParts.push(`Hebrew ${g.hebrew}`);
  if (g.attribution) gdParts.push(g.attribution);
  if (g.element) gdParts.push(`element ${g.element}`);
  if (g.thoth_title) gdParts.push(`Crowley title '${g.thoth_title}'`);

  return `You are writing one paragraph for a literary Hegelian three-card tarot. The card drawn is ${card.name}${orient === 'reversed' ? ' (reversed)' : ''}. Tone: pragmatic, dialectical, literary — not new-age, not coffee-table. About 55-70 words, two or three sentences. NO citations, NO "the card represents", NO "this card means". Write as essayistic prose.

Primary sources (synthesize; do not quote verbatim):
  ${waiteLine}${waiteAdd}
  ${ettLine}
  Golden Dawn / Crowley: ${gdParts.join(', ')}.

POSITION: ${posObj.key.toUpperCase()} — ${posObj.note}

${orient === 'reversed' ? "REVERSAL: treat the reversal as inversion or privation (Waite) rather than 'the opposite'. The same force; weakened, blocked, or turned inward." : ""}

Output the paragraph only. No preamble. No quoting your instructions back.`;
}

async function callOne(prompt) {
  const r = await fetch(`${BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: [{ role: 'user', content: prompt }], chatOptions: { selectedModel: MODEL } }),
  });
  if (!r.ok) throw new Error(`chat ${r.status}: ${await r.text()}`);
  const text = (await r.text()).replace(STATS_RE, '').trim();
  return text;
}

async function main() {
  const jobs = [];
  for (const name of DECK_78) {
    const card = base.cards[name];
    for (const orient of ['upright', 'reversed']) {
      for (const pos of POSITIONS) {
        jobs.push({ name, card, orient, pos });
      }
    }
  }
  log(`START total=${jobs.length} stagger=${STAGGER_MS}ms model=${MODEL}`);
  let done = 0, fails = 0, skipped = 0;
  const t0 = Date.now();
  for (let i = 0; i < jobs.length; i++) {
    const j = jobs[i];
    const id = slug(j.name, j.orient, j.pos.key);
    const f = path.join(OUT_DIR, id + '.txt');
    if (fs.existsSync(f) && fs.statSync(f).size > 30) {
      skipped++;
      continue;
    }
    try {
      const text = await callOne(buildPrompt(j.card, j.orient, j.pos));
      if (text.length < 30) throw new Error('short response: ' + text.slice(0, 80));
      fs.writeFileSync(f, text);
      done++;
      if (done % 20 === 0 || i === jobs.length - 1) {
        const dt = (Date.now() - t0) / 1000;
        const rate = done / dt;
        const eta = ((jobs.length - i - 1) / rate).toFixed(0);
        log(`progress ${i+1}/${jobs.length} done=${done} fail=${fails} skip=${skipped} ~${rate.toFixed(2)}/s eta=${eta}s`);
      }
    } catch (e) {
      fails++;
      log('FAIL', id, e.message.slice(0, 200));
    }
    if (i < jobs.length - 1) await new Promise(r => setTimeout(r, STAGGER_MS));
  }
  log(`DONE total=${jobs.length} ok=${done} fail=${fails} skip=${skipped} elapsed=${((Date.now()-t0)/1000).toFixed(0)}s`);
}

main().catch(e => { log('FATAL', e.message); process.exit(1); });
