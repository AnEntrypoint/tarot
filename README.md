# Three Cards — a literary tarot

Static, browser-only Hegelian three-card tarot. Every reading is pre-generated; no LLM runs at draw-time.

## What's in here

- `cards.mjs` — canonical 78-card deck (22 majors + 56 minors); 156 oriented entries.
- `sources/waite/by_card.json` — A. E. Waite, *The Pictorial Key to the Tarot* (1910), per-card upright + reversed divinatory meanings. Verbatim transcription from Wikisource. Public domain.
- `sources/etteilla/by_card.json` — Etteilla (Jean-Baptiste Alliette), *Manière de se récréer avec le jeu de cartes nommées tarots* (1785), keyword catalog for all 78 cards in both orientations. Public domain.
- `sources/golden_dawn/astrology.json` — Hebrew letter, planetary/zodiac/decan attribution, element, and Crowley *Book of Thoth* title for every card. From Golden Dawn cipher attributions (1888).
- `data/base.json` — the three sources merged per card (92KB).
- `data/synth/*.txt` — 468 LLM-generated 60-word dialectic paragraphs, one per (card × orientation × position). Generated against `chatjimmy.ai` (`llama3.1-8B`) seeded with the three primary sources.
- `index.html` — the app.
- `serve.mjs` — trivial dev server (`node serve.mjs` then open `http://localhost:8765`).

## Architecture

Hegelian spread: **thesis / antithesis / synthesis**.

At draw-time:
1. Cryptographic RNG selects three distinct cards and orientations from the 156.
2. For each `(card, orientation, position)` the browser fetches the pre-generated `data/synth/<slug>.txt` and renders it alongside the primary-source attestations from `data/base.json`.

There are **474,552** distinct three-card readings (156 × 155 × 154). None is computed at draw-time; the system composes from 468 pre-rendered (card, orientation, position) entries plus the 156 source rows.

## Build

```
node merge.mjs    # rebuild data/base.json from the three source layers
node synth.mjs    # generate (or resume) the 468 LLM syntheses
```

`synth.mjs` is idempotent: it skips any `data/synth/*.txt` already present.

## Deploy

Drop the entire `tarot/` directory on any static host. No build step. No backend. ~1.1 MB total.

## Sources

- Waite, A. E. (1910). *The Pictorial Key to the Tarot*, Part III. London: William Rider & Son.  
  Transcribed from [Wikisource](https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot/Part_3).
- Etteilla (Jean-Baptiste Alliette) (1785). *Manière de se récréer avec le jeu de cartes nommées tarots*; expanded as *Grand Etteilla* (1788).  
  Keyword catalogue from [stolen-thyme.com/etteilla-in-english](https://stolen-thyme.com/etteilla-in-english/).
- Hermetic Order of the Golden Dawn (1888) Cipher MSS; Crowley, A. (1944). *The Book of Thoth*.
