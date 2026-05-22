// Prompt builder. Given a focus card (name + orientation) and the position it
// occupies (thesis|antithesis|synthesis), ask cj for the focus card's solo
// reading + 156 cross-references to each *other* card in each of the two
// non-focus positions.

import { DECK_156 } from './cards.mjs';

const CANON_NOTE = `
Citations are mandatory. Cite at least one of:
 - Waite, "The Pictorial Key to the Tarot" (1910). Cite by card name and chapter ("Waite, Pictorial Key, sec. on <card>").
 - Crowley, "The Book of Thoth" (1944). Cite by card name or Thelemic title ("Crowley, Book of Thoth, on <card>").
 - Etteilla, "Manière de se récréer avec le jeu de cartes nommées tarots" (1785). Cite by his numbered card system ("Etteilla, Carte №<n>").
Use chapter/card-name citations, NOT page numbers (page numbers vary by edition and are easy to fabricate). If unsure of attribution, mark with "[attr?]".
`;

export function buildPrompt(focus, focusPosition) {
  const otherPositions = ['thesis', 'antithesis', 'synthesis'].filter(p => p !== focusPosition);
  const others = DECK_156.filter(c => !(c.name === focus.name && c.orientation === focus.orientation));

  return `You are writing one card-entry for an esoteric tarot reference. The spread is Hegelian: THESIS — ANTITHESIS — SYNTHESIS. Each reading is a literary argument, not a horoscope. Tone: pragmatic, dialectical, book-referenced. No purple prose. No "the cards say" hedging.

FOCUS CARD: ${focus.name} (${focus.orientation})
FOCUS POSITION: ${focusPosition}

${CANON_NOTE}

Output STRICT JSON, no markdown, no commentary outside the JSON. Schema:

{
  "focus": "${focus.name}",
  "orientation": "${focus.orientation}",
  "position": "${focusPosition}",
  "solo": {
    "thesis": "<2-3 sentences: what this card asserts in the ${focusPosition} position, with citation>",
    "image": "<1 sentence on the iconographic detail Waite or Crowley emphasises>",
    "citations": ["Waite ...", "Crowley ...", "Etteilla ..."]
  },
  "pairs": {
    "${otherPositions[0]}": {
      "<other-card-id>": "<2 sentences: how ${focus.name} ${focus.orientation} in ${focusPosition} reads when <other card> sits in ${otherPositions[0]}. Cite one source.>",
      ...
    },
    "${otherPositions[1]}": {
      "<other-card-id>": "<2 sentences: same pattern for the ${otherPositions[1]} position>",
      ...
    }
  }
}

The "<other-card-id>" keys MUST be the exact ids from this list (155 entries per position object):
${others.map(c => c.id).join(', ')}

Hard rules:
 - Every "pairs" object MUST contain all 155 keys. Missing keys = invalid.
 - Each pair entry is 2 sentences, max 60 words. Brevity is required.
 - Every solo.citations entry must name the work and the card/section, not a page number.
 - If a card is reversed, treat the reversal as INVERSION (Waite) or PRIVATION (Crowley), not as "the opposite meaning".
 - Output ONLY the JSON object. No prefix, no suffix, no fences.`;
}
