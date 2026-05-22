#!/usr/bin/env node
// Generate 156 "voice" sentences — one per (card, orientation).
// Used at draw-time to colour structural correlations with the card's own register.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DECK_78 } from './cards.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/base.json'), 'utf8'));
const waiteEssays = JSON.parse(fs.readFileSync(path.join(__dirname, 'sources/waite/majors_essays.json'), 'utf8'));
const gebelin = JSON.parse(fs.readFileSync(path.join(__dirname, 'sources/gebelin/majors.json'), 'utf8'));
const OUT = path.join(__dirname, 'data/voice');
fs.mkdirSync(OUT, { recursive: true });
const LOG = path.join(__dirname, 'voice.log');
const STATS_RE = /<\|stats\|>[\s\S]*?<\|\/stats\|>\s*$/g;

const log = (...a) => {
  const l = `[${new Date().toISOString()}] ${a.join(' ')}`;
  console.error(l);
  fs.appendFileSync(LOG, l + '\n');
};

function slug(name, orient) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '__' + orient;
}

function buildPrompt(name, orient) {
  const c = base.cards[name];
  const o = orient === 'upright' ? c.upright : c.reversed;
  const we = waiteEssays[name];
  const ge = gebelin[name];
  const literary = [];
  if (we) literary.push(`Waite (1910), iconographic essay:\n${we.slice(0, 600)}`);
  if (ge) literary.push(`Gébelin (1781):\n${ge.replace(/^\[Gébelin[^\]]+\]\n/, '').slice(0, 500)}`);
  const lit = literary.length ? literary.join('\n\n') + '\n\n' : '';

  return `${lit}Waite divinatory keyword (${orient}): ${o.waite}
Etteilla (1785): ${o.etteilla}
Golden Dawn: ${c.golden_dawn.hebrew || ''} ${c.golden_dawn.attribution || ''} ${c.golden_dawn.element || ''}.

Write ONE sentence (15-22 words) describing how ${name}${orient === 'reversed' ? ' (reversed)' : ''} BEHAVES toward another card in a tarot reading — its characteristic way of pressing on, undermining, amplifying, or answering whatever sits beside it. Voice: pragmatic, literary, dialectical. Use a concrete image from the sources above (Plutus, the Lion, the Cliff, the Egyptian abyss, etc.) where it fits. NO 'represents', NO 'symbolizes'.

Output ONLY the sentence. No preamble, no period-stripped fragments, no quotation marks.`;
}

async function callOne(prompt) {
  const r = await fetch('https://chatjimmy.ai/api/chat', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: [{ role: 'user', content: prompt }], chatOptions: { selectedModel: 'llama3.1-8B' } }),
  });
  if (!r.ok) throw new Error(`chat ${r.status}`);
  return (await r.text()).replace(STATS_RE, '').trim();
}

async function main() {
  const jobs = [];
  for (const name of DECK_78) for (const orient of ['upright', 'reversed']) jobs.push({ name, orient });
  log(`START ${jobs.length} jobs`);
  let done = 0, fail = 0, skip = 0;
  const t0 = Date.now();
  for (let i = 0; i < jobs.length; i++) {
    const { name, orient } = jobs[i];
    const id = slug(name, orient);
    const f = path.join(OUT, id + '.txt');
    if (fs.existsSync(f) && fs.statSync(f).size > 20) { skip++; continue; }
    try {
      const text = await callOne(buildPrompt(name, orient));
      if (text.length < 20) throw new Error('short: ' + JSON.stringify(text).slice(0,80));
      fs.writeFileSync(f, text);
      done++;
      if (done % 10 === 0 || i === jobs.length - 1) {
        const dt = (Date.now() - t0) / 1000;
        log(`${i+1}/${jobs.length} done=${done} fail=${fail} skip=${skip} ~${(done/dt).toFixed(2)}/s`);
      }
    } catch(e) { fail++; log('FAIL', id, e.message.slice(0,100)); }
    if (i < jobs.length - 1) await new Promise(r => setTimeout(r, 1000));
  }
  log(`DONE ok=${done} fail=${fail} skip=${skip} elapsed=${((Date.now()-t0)/1000).toFixed(0)}s`);
}

main().catch(e => { log('FATAL', e.message); process.exit(1); });
