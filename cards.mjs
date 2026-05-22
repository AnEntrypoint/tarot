// Canonical 78-card tarot deck — Rider-Waite-Smith naming.
// Each card has: id, name, arcana, suit (minor only), rank (minor only).

export const MAJORS = [
  '0 The Fool', 'I The Magician', 'II The High Priestess', 'III The Empress',
  'IV The Emperor', 'V The Hierophant', 'VI The Lovers', 'VII The Chariot',
  'VIII Strength', 'IX The Hermit', 'X Wheel of Fortune', 'XI Justice',
  'XII The Hanged Man', 'XIII Death', 'XIV Temperance', 'XV The Devil',
  'XVI The Tower', 'XVII The Star', 'XVIII The Moon', 'XIX The Sun',
  'XX Judgement', 'XXI The World',
];

const SUITS = ['Wands', 'Cups', 'Swords', 'Pentacles'];
const RANKS = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'];

export const MINORS = SUITS.flatMap(s => RANKS.map(r => `${r} of ${s}`));

export const DECK_78 = [...MAJORS, ...MINORS];

// 156 = 78 upright + 78 reversed. Orientation explicit in the name.
export const DECK_156 = [
  ...DECK_78.map(n => ({ name: n, orientation: 'upright', id: slug(n, 'u') })),
  ...DECK_78.map(n => ({ name: n, orientation: 'reversed', id: slug(n, 'r') })),
];

function slug(name, o) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + o;
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}` || process.argv[1]?.endsWith('cards.mjs')) {
  console.log(`majors: ${MAJORS.length}, minors: ${MINORS.length}, total 78: ${DECK_78.length}, total 156: ${DECK_156.length}`);
  console.log(DECK_156.slice(0, 3));
  console.log(DECK_156.slice(-3));
}
