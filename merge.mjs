// Merge the three primary-source layers into one per-card JSON file
// that the browser can load. No LLM. Public-domain everything.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DECK_78 } from './cards.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const waite = JSON.parse(fs.readFileSync(path.join(__dirname, 'sources/waite/by_card.json'), 'utf8'));
const etteilla = JSON.parse(fs.readFileSync(path.join(__dirname, 'sources/etteilla/by_card.json'), 'utf8'));
const gd = JSON.parse(fs.readFileSync(path.join(__dirname, 'sources/golden_dawn/astrology.json'), 'utf8'));

const out = {};
for (const name of DECK_78) {
  const w = waite[name] || {};
  const e = etteilla[name] || {};
  const g = gd[name] || {};
  out[name] = {
    name,
    arcana: name.match(/^[IVX0-9]/) ? 'major' : 'minor',
    suit: name.match(/of (Wands|Cups|Swords|Pentacles)$/)?.[1] || null,
    upright: {
      waite: w.upright || w.upright_long || null,
      waite_additional: w.additional_upright || null,
      etteilla: e.upright,
      etteilla_name: e.etteilla_name || null,
    },
    reversed: {
      waite: w.reversed || w.reversed_long || null,
      waite_additional: w.additional_reversed || null,
      etteilla: e.reversed,
    },
    image: w.image || null,
    golden_dawn: {
      hebrew: g.hebrew || null,
      attribution: g.attribution || null,
      element: g.element || null,
      thoth_title: g.thoth_title || null,
    },
  };
}

const meta = {
  sources: {
    waite: 'Waite, A. E. (1910). The Pictorial Key to the Tarot, Part III. London: William Rider & Son. Public domain. Transcribed from Wikisource.',
    etteilla: "Etteilla (Jean-Baptiste Alliette) (1785). Manière de se récréer avec le jeu de cartes nommées tarots; expanded as Grand Etteilla (1788). Keyword catalogue from stolen-thyme.com/etteilla-in-english.",
    golden_dawn: 'Hermetic Order of the Golden Dawn (1888) Cipher MSS attributions; Crowley, A. (1944). The Book of Thoth.'
  }
};

const outPath = path.join(__dirname, 'data/base.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({ _meta: meta, cards: out }, null, 2));
console.error(`wrote ${outPath} (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB)`);

const incomplete = DECK_78.filter(n => !out[n].upright.waite || !out[n].upright.etteilla);
console.error(`fully sourced (Waite+Etteilla upright): ${78 - incomplete.length}/78`);
if (incomplete.length) console.error('incomplete:', incomplete);
