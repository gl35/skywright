// Static game data: biomes, worlds, aircraft, upgrades and the mission-by-mission story.

const rgb = (h) => [(h >> 16) & 255, (h >> 8) & 255, h & 255];

// land[1..11] are the colours of terrain height levels 1..11; water is deep, mid, shallow, shore.
function biome(def) {
  const land = [rgb(def.land[0])].concat(def.land.map(rgb)); // index 0 unused (wet sand)
  land[0] = land[1].map((c) => c * 0.8);
  return { ...def, pal: { land, side: land.map((c) => c.map((v) => v * 0.62)), water: def.water.map(rgb) } };
}

export const BIOMES = {
  temperate: biome({
    name: 'Temperate isles', sea: 0.55, hs: 40, cloud: 0.55, storm: 0.04, trees: true,
    land: [0xe2d29a, 0x7cc35a, 0x5fae4c, 0x3f9143, 0x2f7a3c, 0x8a8f85, 0x767a72, 0x9a9d96, 0xe8eef2, 0xf6fafc, 0xffffff],
    water: [0x1f5fae, 0x2a74c2, 0x49a0d8, 0xbfe6f5],
  }),
  tropical: biome({
    name: 'Tropics', sea: 0.57, hs: 36, cloud: 0.6, storm: 0.14, trees: true,
    land: [0xf3e3a6, 0x6fd05a, 0x4fbb4a, 0x2f9a45, 0x1f7f3c, 0x7d8a6a, 0x6a765a, 0x8c9478, 0xa9b59a, 0xc2ccb6, 0xdfe6d6],
    water: [0x1670b8, 0x1f93cf, 0x4fd0d8, 0xd4f6f2],
  }),
  desert: biome({
    name: 'Desert coast', sea: 0.5, hs: 34, cloud: 0.25, storm: 0.05, trees: false,
    land: [0xecd9a0, 0xe3c27e, 0xd9a961, 0xc98d4e, 0xb8733f, 0xa55f38, 0x8f4f33, 0x7a432e, 0xb98a66, 0xd8b594, 0xefdcc4],
    water: [0x235fa0, 0x2f7fb8, 0x5fb5cf, 0xcdeaf0],
  }),
  alpine: biome({
    name: 'High ranges', sea: 0.45, hs: 75, cloud: 0.5, storm: 0.2, trees: true,
    land: [0xb9b08c, 0x6da860, 0x3f7f48, 0x2f6a40, 0x777c80, 0x666b70, 0x8a8f94, 0xdfe7ee, 0xeef3f7, 0xf8fbfd, 0xffffff],
    water: [0x1d4f8c, 0x2a67a6, 0x4f8fc0, 0xc4dcee],
  }),
  arctic: biome({
    name: 'Polar ice', sea: 0.5, hs: 50, cloud: 0.6, storm: 0.3, trees: false,
    land: [0xc9dbe6, 0xdce9f0, 0xe9f2f7, 0xf4f9fb, 0xffffff, 0xcfdfe9, 0xb7cddb, 0xdbe7ee, 0xeef5f8, 0xfafdfe, 0xffffff],
    water: [0x15406e, 0x1f5688, 0x3b7fae, 0xd6ecf6],
  }),
  volcanic: biome({
    name: 'Fire islands', sea: 0.58, hs: 70, cloud: 0.65, storm: 0.42, trees: false,
    land: [0x4a4444, 0x5a6a4a, 0x4a5c40, 0x3d3a3a, 0x4a4040, 0x5a4444, 0x6a4a40, 0x7a4a3a, 0xa04a2a, 0xd0602a, 0xf0a030],
    water: [0x1a4a7a, 0x24629a, 0x3f88b8, 0xb9d6e6],
  }),
  // ---- the four dynasties ----
  loess: biome({
    name: 'Loess hills and river fields', sea: 0.5, hs: 38, cloud: 0.4, storm: 0.06, trees: true,
    land: [0xd9c68a, 0x9fbf62, 0x86ad55, 0xb9a15c, 0xc9ad66, 0xb89553, 0xa5824a, 0x8f6f42, 0x7a5f3c, 0xa08a6a, 0xc4b79c],
    water: [0x3a6f8f, 0x4a86a3, 0x6aa7b8, 0xbfdcd8],
  }),
  guanzhong: biome({
    name: 'Farmland under the southern mountains', sea: 0.49, hs: 42, cloud: 0.45, storm: 0.05, trees: true,
    land: [0xdccf98, 0x8fc75c, 0xb6c95a, 0x6fb04e, 0x4f9645, 0x3d7f40, 0x6f8068, 0x8a9186, 0xa8aea4, 0xd5dad6, 0xf0f3f1],
    water: [0x2f6f9a, 0x3f88b0, 0x62a8c4, 0xc6e4ea],
  }),
  plain: biome({
    name: 'Yellow River plain', sea: 0.52, hs: 22, cloud: 0.4, storm: 0.04, trees: true,
    land: [0xd8c489, 0xa8c860, 0xc8cc66, 0x98bd58, 0x7aa84e, 0x5e9447, 0x7d8a6c, 0x97a08c, 0xb5bbaa, 0xd6dacf, 0xeeefe8],
    water: [0x8a7a4a, 0x9c8b56, 0xb5a468, 0xd9cfa0],
  }),
  jiangnan: biome({
    name: 'River country, mist and paddies', sea: 0.56, hs: 34, cloud: 0.75, storm: 0.12, trees: true,
    land: [0xcfc79a, 0x7fc46a, 0x5fb060, 0x4a9c58, 0x3a8650, 0x2f7248, 0x5f7f6c, 0x7f988a, 0xa3b5aa, 0xc9d5cd, 0xe6ece8],
    water: [0x2a6a7c, 0x3a8492, 0x5aa6aa, 0xc4e2dc],
  }),
  // ---- off-world ----
  moon: biome({
    name: 'Lunar highlands and maria', sea: 0.5, hs: 46, cloud: 0, storm: 0, trees: false,
    land: [0x8f9096, 0x9a9ba1, 0xa6a7ad, 0xb1b2b8, 0xbcbdc2, 0x9d9ea4, 0x8b8c92, 0xa9aab0, 0xc4c5ca, 0xd4d5d9, 0xe6e7ea],
    water: [0x55575e, 0x5e6068, 0x696b73, 0x7a7c84],
  }),
  mars: biome({
    name: 'Canyons and dust', sea: 0.46, hs: 62, cloud: 0.3, storm: 0.34, trees: false,
    land: [0xc9703f, 0xb9623a, 0xc77a45, 0xa85433, 0x96482e, 0xb5683c, 0x8a3f2a, 0x7a3626, 0xa4553a, 0xc98a62, 0xe6c3a0],
    water: [0x6a2f22, 0x7a3828, 0x8c432e, 0xa55a3c],
  }),
  alien: biome({
    name: 'A sea no chart has', sea: 0.56, hs: 44, cloud: 0.5, storm: 0.2, trees: true,
    land: [0xe8d7f0, 0x4fd6c0, 0x3cbfae, 0x2fa59a, 0x278b88, 0x5a6fb0, 0x6a5fc0, 0x7d55c8, 0xb07ae0, 0xd9a8f0, 0xf6e0ff],
    water: [0x2a1f5c, 0x3a2a7a, 0x5a40a8, 0xcdb8ff],
  }),
};

// A world is a separate map: its own seed, stops, sky and rules.
// pad: how a landing ground is painted. marks: buildings drawn at each stop.
// water:false means the low ground is dry (you can land on it). dark: how black the sky is at ground level.
export const WORLDS = {
  earth: {
    id: 'earth', name: 'Earth', seed: 1337, water: true, gravity: 1, dark: 0, pad: 'runway', clouds: ['white', 'storm'], sky: [150, 200, 240],
    stops: [
      { name: 'Wrenfield', tag: 'Home field', biome: 'temperate', x: 0, y: 0, marks: ['hangar', 'tower'] },
      { name: 'Port Calloway', tag: 'Harbour town', biome: 'temperate', x: 1300, y: -180, marks: ['hangar', 'tower'] },
      { name: 'Mango Key', tag: 'Tropical outpost', biome: 'tropical', x: 2900, y: 220, marks: ['hangar', 'tower'] },
      { name: 'Saffron Quay', tag: 'Desert trading port', biome: 'desert', x: 4800, y: -120, marks: ['hangar', 'tower'] },
      { name: 'Highgate', tag: 'Mountain airstrip', biome: 'alpine', x: 6800, y: 260, marks: ['hangar', 'pagoda'] },
      { name: 'Frostholm', tag: 'Polar research station', biome: 'arctic', x: 9200, y: -260, marks: ['dome', 'tower'] },
      { name: 'Cinder Reach', tag: 'Volcano observatory', biome: 'volcanic', x: 12200, y: 150, marks: ['hangar', 'tower'] },
      { name: 'Juniper Atoll', tag: 'Last stop before home', biome: 'tropical', x: 14800, y: -200, marks: ['hangar', 'tower'] },
      { name: 'Wrenfield', tag: 'Home field, the long way round', biome: 'temperate', x: 17000, y: 0, marks: ['hangar', 'tower'] },
    ],
  },
  han: {
    id: 'han', name: 'Eastern Han, 132 CE', seed: 2132, water: true, gravity: 1, dark: 0, pad: 'plaza', clouds: ['white', 'storm'], sky: [170, 200, 225],
    stops: [
      { name: 'Luo River meadow', tag: 'Where the door opened', biome: 'loess', x: 0, y: 0, marks: ['door'] },
      { name: 'Luoyang', tag: 'Capital of the Eastern Han', biome: 'loess', x: 1250, y: 160, marks: ['gate', 'pagodaSmall'] },
    ],
  },
  tang: {
    id: 'tang', name: 'Tang, 725 CE', seed: 2725, water: true, gravity: 1, dark: 0, pad: 'plaza', clouds: ['white', 'storm'], sky: [160, 205, 235],
    stops: [
      { name: 'Zhongnan foothills', tag: 'Where the door opened', biome: 'guanzhong', x: 0, y: 0, marks: ['door'] },
      { name: "Chang'an", tag: 'A city of a million people', biome: 'guanzhong', x: 1300, y: -140, marks: ['pagoda', 'gate'] },
    ],
  },
  song: {
    id: 'song', name: 'Northern Song, 1092 CE', seed: 3092, water: true, gravity: 1, dark: 0, pad: 'plaza', clouds: ['white', 'storm'], sky: [175, 205, 225],
    stops: [
      { name: 'Yellow River bank', tag: 'Where the door opened', biome: 'plain', x: 0, y: 0, marks: ['door'] },
      { name: 'Kaifeng', tag: 'The eastern capital', biome: 'plain', x: 1350, y: 120, marks: ['clock', 'gate'] },
    ],
  },
  ming: {
    id: 'ming', name: 'Ming, 1405 CE', seed: 3405, water: true, gravity: 1, dark: 0, pad: 'plaza', clouds: ['white', 'storm'], sky: [165, 205, 220],
    stops: [
      { name: 'Purple Mountain', tag: 'Where the door opened', biome: 'jiangnan', x: 0, y: 0, marks: ['door'] },
      { name: 'Longjiang Shipyard', tag: 'On the Yangtze at Nanjing', biome: 'jiangnan', x: 1400, y: -160, marks: ['ship', 'gate'] },
    ],
  },
  moon: {
    id: 'moon', name: 'The Moon', seed: 4001, water: false, gravity: 0.17, dark: 1, pad: 'pad', clouds: null, sky: [4, 6, 22],
    stops: [{ name: 'Tranquil Ground', tag: 'Lunar landing ground', biome: 'moon', x: 0, y: 0, marks: ['dome', 'mast'] }],
  },
  mars: {
    id: 'mars', name: 'Mars', seed: 4002, water: false, gravity: 0.38, dark: 0.25, pad: 'pad', clouds: ['dustLight', 'dust'], sky: [214, 150, 110],
    stops: [{ name: 'Ares Slip', tag: 'A dry dock in a canyon', biome: 'mars', x: 0, y: 0, marks: ['dome', 'ship'] }],
  },
  deep: {
    id: 'deep', name: 'The Far Shore', seed: 4003, water: true, gravity: 0.8, dark: 0.55, pad: 'plaza', clouds: ['mist', 'violet'], sky: [90, 60, 150],
    stops: [{ name: 'The Far Shore', tag: 'Under a sky with two suns', biome: 'alien', x: 0, y: 0, marks: ['spire', 'lantern'] }],
  },
};

export const PARTS = {
  engine: { name: 'Engine', fail: 'ENGINE MISFIRE', effect: 'Half power' },
  frame: { name: 'Airframe', fail: 'JAMMED CONTROLS', effect: 'Sluggish, pulls right' },
  fuel: { name: 'Fuel system', fail: 'FUEL LEAK', effect: 'Burning fuel 4x faster' },
  avionics: { name: 'Avionics', fail: 'INSTRUMENTS DARK', effect: 'Navigation is dark' },
};
export const PART_KEYS = Object.keys(PARTS);

// space: how many times faster the craft gets in thin air near its ceiling.
// hover: can slow to a stop in the air. start: the state each machine is in when it reaches you.
export const AIRCRAFT = {
  sparrow: {
    name: 'Sparrow', kind: 'Vintage biplane trainer', tier: 1, nose: '#c8402f',
    speed: 16, ceil: 20, climb: 5, tank: 70, burn: 0.5, turn: 0.95, wear: 1.25, floats: false,
    start: { engine: 58, frame: 72, fuel: 54, avionics: 66, tank: 0.45 },
    blurb: "Nan's old biplane. Slow, thirsty and leaky, but she flies.",
  },
  heron: {
    name: 'Heron', kind: 'Floatplane', tier: 1.3, nose: '#f2f4f5',
    speed: 19, ceil: 26, climb: 5.5, tank: 115, burn: 0.58, turn: 0.9, wear: 1.0, floats: true,
    start: { engine: 74, frame: 60, fuel: 82, avionics: 55, tank: 0.5 },
    blurb: 'Lands on water. If something breaks over the ocean you can set down and fix it.',
  },
  dragonfly: {
    name: 'Dragonfly', kind: 'Clockwork ornithopter', tier: 1.6, nose: '#c9a24a',
    speed: 21, ceil: 26, climb: 7, tank: 100, burn: 0.42, turn: 1.5, wear: 1.1, floats: false,
    start: { engine: 66, frame: 52, fuel: 78, avionics: 70, tank: 0.6 },
    blurb: 'Four beating wings of brass and oiled silk. Turns on a coin, which is what a mountain valley asks for.',
  },
  kestrel: {
    name: 'Kestrel', kind: 'Twin turboprop', tier: 2, nose: '#d2d8dd',
    speed: 25, ceil: 40, climb: 8, tank: 170, burn: 0.8, turn: 0.8, wear: 0.85, floats: false,
    start: { engine: 62, frame: 80, fuel: 70, avionics: 48, tank: 0.5 },
    blurb: 'Climbs over the high ranges and over most storm tops.',
  },
  comet: {
    name: 'Comet', kind: 'Light jet', tier: 2.6, nose: '#f5f7fa',
    speed: 34, ceil: 58, climb: 12, tank: 250, burn: 1.25, turn: 0.7, wear: 0.7, floats: false,
    start: { engine: 78, frame: 70, fuel: 58, avionics: 74, tank: 0.55 },
    blurb: 'Fast and high. Crosses the long ocean legs with fuel to spare.',
  },
  meteor: {
    name: 'Meteor', kind: 'Rocket plane', tier: 3.2, nose: '#4f5564',
    speed: 44, ceil: 95, climb: 16, tank: 300, burn: 1.8, turn: 0.6, wear: 0.65, floats: false, space: 1,
    start: { engine: 70, frame: 64, fuel: 72, avionics: 60, tank: 0.6 },
    blurb: 'Climbs to the edge of space, where the sky goes black and the thin air doubles its speed.',
  },
  ark: {
    name: "Tinker's Ark", kind: 'Patchwork airship with a door', tier: 1.8, nose: '#7a4f2e',
    speed: 15, ceil: 30, climb: 3.5, tank: 260, burn: 0.34, turn: 0.6, wear: 0.7, floats: true, hover: true,
    start: { engine: 60, frame: 55, fuel: 68, avionics: 50, tank: 0.7 },
    blurb: 'A boat hull under a quilt of gas bags. It hovers, settles on land or water, and has a door that does not open onto the deck.',
  },
  starling: {
    name: 'Starling', kind: 'Star raft', tier: 4, nose: '#f4f5f7',
    speed: 40, ceil: 220, climb: 22, tank: 420, burn: 3, turn: 0.55, wear: 0.6, floats: false, space: 5, orbit: true,
    start: { engine: 72, frame: 78, fuel: 66, avionics: 62, tank: 0.8 },
    blurb: 'Built from a Ming shipwright’s drawing and four dynasties of borrowed ideas. Reaches orbit and beyond. Come down gently or the heat eats the hull.',
  },
};

// Upgrades are your own skills and tools, so they carry over to every machine you fly.
export const UPGRADES = {
  engine: { name: 'Engine tuning', desc: '+8% speed and climb per level' },
  tank: { name: 'Fuel trimming', desc: '+15% range per level' },
  frame: { name: 'Bracing and doping', desc: 'All parts wear 15% slower per level' },
  avionics: { name: 'Instruments', desc: 'Level 1 adds storm radar. Each level cuts breakdowns by 20%' },
};
export const UP_COST = [200, 500, 1000];
export const KIT_COST = 40;
export const KIT_CAP_COST = 120;
export const KIT_CAP_MAX = 5;

export const START_SAVE = () => ({
  v: 2, mission: 0, money: 140,
  fleet: {}, up: { engine: 0, tank: 0, frame: 0, avionics: 0 },
  kits: 1, kitCap: 2, shift: false, seen: {},
});

export const INTRO = {
  title: 'The logbook',
  nan: '"If you are reading this, you have the key. Fly the long way round first. You will need to know how to keep a machine alive before the door will be any use to you."',
  body: [
    'Odile Wren, your Nan, flew out of Wrenfield in 1938 to circle the world and came home eleven months later. She never said where she had been. She left you three things: the Sparrow, a logbook with half its pages in a script nobody can read, and a brass key that fits nothing in the house.',
    'You are a pilot and an engineer, same as she was. The Sparrow’s engine is tired and her fuel lines weep. Fix what you can afford, fill the tank and head east.',
  ],
};

// One entry per mission, in order. Each names the machine you must fly.
// transit: the flight leaves this world (climb high and hold) and ends on another one.
export const MISSIONS = [
  // ---------- Chapter 1: the long way round ----------
  {
    ch: 'Chapter 1 · The Long Way Round', title: 'First light', world: 'earth', from: 0, to: 1, craft: 'sparrow', pay: 420,
    brief: 'Carry the mail sack to Port Calloway. Something always shakes loose on the first leg, so take a repair kit.',
    arrive: [
      'The harbour master, Ines Okafor, signs for the mail and then looks hard at the Sparrow. "I have seen this aeroplane. A woman flew it in before the war and left on a floatplane she rebuilt on my slipway in nine days."',
      'The floatplane is still here under a tarpaulin. The next two legs are open ocean, and the Sparrow cannot swim. Ines will crate her home if you can get the Heron running.',
    ],
  },
  {
    title: 'Open water', world: 'earth', from: 1, to: 2, craft: 'heron', pay: 520,
    brief: 'Nowhere to land between here and Mango Key except the sea itself. The Heron can set down on water, so a breakdown is a pause, not the end.',
    arrive: [
      'Mango Key is one runway and a radio shack. The operator, an old man called Tomasi, has a photograph on the wall: your Nan, thirty years younger, holding a wrench beside this same Heron.',
      '"She asked everyone the same thing," he says. "Had we seen a ship in the sky with no engines. We thought the sun had got to her."',
    ],
  },
  {
    title: 'Storm alley', world: 'earth', from: 2, to: 3, craft: 'heron', pay: 620,
    brief: 'Storm cells build fast on the way to Saffron Quay. They chew the airframe and fry the electrics. Go round them or stay underneath.',
    arrive: [
      'In the market at Saffron Quay a clockmaker named Farid Haddad takes one look at the unreadable pages in the logbook and goes quiet. "That is not a language. That is a parts list." He can read perhaps one line in ten.',
      'He has spent twenty years building a flying machine from a drawing a customer once left him as payment. It beats its wings. Nothing with a propeller will get through the passes to Highgate, he says, but this might.',
    ],
  },
  {
    title: 'The passes', world: 'earth', from: 3, to: 4, craft: 'dragonfly', pay: 720,
    brief: 'The peaks before Highgate are higher than the Dragonfly can climb. Follow the valleys. She turns faster than anything else you will fly.',
    arrive: [
      'Highgate is a strip cut into a mountainside below a monastery. Nan’s last readable entry is dated here: "Engine finished. Turning back." It is a lie. The abbot shows you why.',
      'In a cave behind the prayer hall sits the wreck of an airship: a boat hull, a rotten quilt of gas bags, and in the hull a door with a brass lock. "She did not turn back," he says. "She went through. She was gone a season and came out older." The key in your pocket is suddenly heavy. The door is jammed and the ship is in no state to fly. The monks will send it to Wrenfield by rail and sea. It will take months. Finish the lap.',
    ],
  },
  {
    title: 'Over the top', world: 'earth', from: 4, to: 5, craft: 'kestrel', pay: 860,
    brief: 'A survey crew at Highgate lends you their Kestrel to take north. It climbs above the ranges and above most storm tops. Its instruments are in a sorry state.',
    arrive: [
      'Frostholm is a ring of huts on the ice. The station chief, Dr Anneli Voss, studies old magnetic records. She has one from 1938 that makes no sense: a compass needle that swung to point straight up for six minutes.',
      '"Your grandmother signed the visitors’ book that week," she says. "Under occupation she wrote: carpenter." The station keeps a small jet for the long crossings. You will need it.',
    ],
  },
  {
    title: 'The long crossing', world: 'earth', from: 5, to: 6, craft: 'comet', pay: 1000,
    brief: 'The longest leg of the lap, most of it over water, ending in the storms around Cinder Reach. The Comet has the range if its fuel system holds.',
    arrive: [
      'Cinder Reach smells of sulphur. The volcanologists here have a puzzle of their own: a bronze bowl, dredged from the crater lake, with eight dragons round its rim. It is a seismoscope, of a pattern that should be on the other side of the world and eighteen centuries old.',
      'Stamped inside the rim, small and neat, is a wren.',
    ],
  },
  {
    title: 'Ash and rain', world: 'earth', from: 6, to: 7, craft: 'comet', pay: 1100,
    brief: 'Two legs to go. The air over the fire islands is rough and the storms never really clear.',
    arrive: [
      'Juniper Atoll is a strip of coral barely longer than the runway. A test pilot named Marguerite Diallo is stranded here with a rocket plane and a broken arm.',
      '"Take it home for me," she says. "It goes high enough that the sky turns black. Up there you will see why your grandmother asked about ships with no engines. There is one mark on the ocean that is not on any chart, and it is shaped like a road."',
    ],
  },
  {
    title: 'The edge of the sky', world: 'earth', from: 7, to: 8, craft: 'meteor', pay: 1200,
    brief: 'Home. Climb until the sky goes dark and the Meteor will double its speed in the thin air. Come down gently: a steep descent from that height burns the hull.',
    arrive: [
      'You come in over the same hedgerow you left by. All the way round. In the big shed at the end of the field, delivered while you were away, sits a crate the size of a house.',
      'The Ark. You spend three weeks on the gas bags and the engines before you try the key. It turns. The door does not open onto the deck. It opens onto a river meadow in spring, and the air coming through it smells of woodsmoke and wet earth.',
    ],
  },
  // ---------- Chapter 2: the door in the Ark ----------
  {
    ch: 'Chapter 2 · The Door in the Ark', title: 'Han: the listening bronze', world: 'han', from: 0, to: 1, craft: 'ark', pay: 900,
    brief: 'You have brought the Ark through its own door, and the year is 132. Follow the Luo River to the walls of Luoyang. Fly gently and set down outside the gate.',
    arrive: [
      'Nobody runs. A crowd gathers, and through it comes a court official in his fifties with ink on his sleeves: Zhang Heng, astronomer, poet, and maker of the bronze vessel that tells the court when the earth shakes hundreds of miles away. He walks once round the Ark and says, "You are the second."',
      'The books at home give him one seismoscope. His workshop has eight, cast by a foundry run by two sisters, and seven of them do not listen to the ground. They are aimed upward. "Things fall from the sky," he says, "and they fall along roads. Your predecessor helped me draw the first of them." He gives you a silk chart of that road, and a jar of the lacquer his craftsmen use to seal bronze. It seals gas bags too.',
    ],
    real: 'In the history books: Zhang Heng built a seismoscope in 132 CE that detected distant earthquakes, and was a noted astronomer and mathematician. Imagined for this story: the other seven instruments, the sky roads, and his meeting with Nan.',
  },
  {
    title: 'Tang: the monk who measured the world', world: 'tang', from: 0, to: 1, craft: 'ark', pay: 900,
    brief: 'The door opens on the year 725. Chang’an lies north across the farmland: the largest city on Earth, a million people inside its walls.',
    arrive: [
      'You set down in the western market among Sogdian horse traders, Persian glass sellers and a Korean troupe of acrobats who immediately want to climb the rigging. Nothing at school said the capital of the Tang sounded like forty languages at once.',
      'The monk Yi Xing finds you by dusk. He has just finished measuring the length of a degree of the Earth with survey teams strung over two thousand li, and with the engineer Liang Lingzan he has built a water-driven globe of the heavens that ticks. He shows you what makes it tick: a little rocking gate that lets the wheel advance one tooth at a time. "The lady with the wooden bird said this would matter in a thousand years." He fits a brass copy of it to the Ark’s engines. They have never run so evenly.',
    ],
    real: 'In the history books: Yi Xing led a meridian survey around 724 CE and, with Liang Lingzan, built a water-powered celestial globe with an early escapement. Chang’an really was among the largest and most international cities of its age. Imagined: his visitor, and the gift to the Ark.',
  },
  {
    title: 'Song: the tower that kept the sky', world: 'song', from: 0, to: 1, craft: 'ark', pay: 900,
    brief: 'The year is 1092. Follow the Yellow River east to Kaifeng. Look for a wooden tower taller than anything round it, with a bronze sphere on the roof.',
    arrive: [
      'Kaifeng does not sleep. There are restaurants open at midnight with printed menus, shops that take paper money, and a man selling books made with movable type who cannot understand why you find that remarkable.',
      'Su Song’s clock tower is forty feet of joinery driven by a waterwheel and a chain of iron links. Its armillary sphere turns with the sky; inside, wooden figures come out to strike the hours. He takes you up a stair that is on none of his own published drawings. The top floor is a room of brass rods and counting wheels, and it is not telling the time. "It tells where things will be," he says. "The moon. The red wanderer. And a third place, which the lady asked me to add." He copies three tables onto paper for you, in the script from the back of the logbook. You can read it now. It was always numbers.',
    ],
    real: 'In the history books: Su Song completed a water-driven astronomical clock tower in Kaifeng about 1094, with a chain drive and an escapement, and published its design. Song cities had night markets, restaurants, paper money and movable type printing. Imagined: the hidden upper room and its tables.',
  },
  {
    title: 'Ming: the star raft', world: 'ming', from: 0, to: 1, craft: 'ark', pay: 900,
    brief: 'The year is 1405. Downriver from Purple Mountain is the Longjiang shipyard, where the largest wooden ships ever built are being fitted out for the western ocean.',
    arrive: [
      'The yard is a forest of masts. Ships the length of a street lie in their docks, and the sailors have a name for them that the books at home translate without a second thought: star rafts.',
      'A master shipwright, an old woman everyone calls Aunt Ruan, leads you past the docks to a shed with a guard on it. On the floor is a full-size drawing of a hull that was never meant for water. No masts, no keel, a skin of overlapping tiles. "The admiral asked for ships to reach every shore," she says. "I asked him which shores. This one needs an engine that does not exist." You look at the drawing for a long time. With Zhang Heng’s roads, Yi Xing’s rocking gate and Su Song’s tables, you know how to build the engine. She rolls up the drawing and puts it in your hands. "Then it was always for you. Tell the lady it took us long enough."',
    ],
    real: 'In the history books: the Longjiang shipyard at Nanjing built the treasure fleet that Zheng He led from 1405, and its ships were indeed called "star rafts" (xingcha). Imagined: Aunt Ruan and the drawing of a hull for the sky.',
  },
  // ---------- Chapter 3: star raft ----------
  {
    ch: 'Chapter 3 · Star Raft', title: 'Learning to drive a star raft', world: 'earth', from: 0, to: 8, craft: 'starling', pay: 1500,
    brief: 'It took a year to build. Take the Starling once round the world to learn her. Climb until the sky is black: above 100 km the engines idle and you coast. Then come down slowly to land back at Wrenfield.',
    arrive: [
      'One lap, launch to landing. The first time took you eight legs, six aircraft and a logbook full of repairs.',
      'From orbit you saw what the test pilot meant. Zhang Heng’s road is real: a faint straight track of light that leaves the top of the air and runs toward the Moon.',
    ],
  },
  {
    title: 'The Moon', world: 'earth', from: 0, craft: 'starling', pay: 2000, transit: { world: 'moon', to: 0 },
    brief: 'Climb above 100 km and hold there while the Starling lines up with the road. She will make the burn herself. On the far side, descend gently and land at the ground Su Song’s first table points to. Gravity is a sixth of what you know: everything falls slowly.',
    transitText: ['The engines light and stay lit. Earth shrinks to a blue coin in the rear window. For three days there is nothing to fix, and you find you do not know what to do with your hands.', 'Then the Moon fills the windscreen, grey and enormous, and the road bends down toward a dark plain.'],
    arrive: [
      'The dust has never been walked on, and yet there is a landing ground: a ring of fitted stone, swept clean, with a low dome beside it.',
      'Inside the dome is a workbench. On it sit a bronze bowl with eight dragons, all pointing the same way, and a wooden mallet with O.W. burned into the handle. She was here. The dragons point at a red star low on the horizon.',
    ],
  },
  {
    title: 'Mars', world: 'moon', from: 0, craft: 'starling', pay: 2500, transit: { world: 'mars', to: 0 },
    brief: 'Follow the dragons. Lift off from the Moon, climb and hold for the burn. Mars has thin air and dust storms that will scour the hull. Su Song’s second table gives a canyon.',
    transitText: ['Seven months, by the tables. The road makes it eleven days. You rebuild the fuel pumps twice on the way, because you can and because it passes the time.', 'Mars comes up the colour of rust and old brick, with a dust storm the size of a country crawling across it.'],
    arrive: [
      'The canyon is four miles deep, and in its floor someone has cut a dry dock. On the stocks lies the ribcage of a ship built to Aunt Ruan’s drawing, three times the size of the Starling, never finished.',
      'There are tools laid out in order, and a kettle. Chalked on a rib, in handwriting you know from every birthday card of your childhood: "Ran out of timber. Gone ahead in the small one. Third table. Bring tea."',
    ],
  },
  {
    title: 'The wide universe', world: 'mars', from: 0, craft: 'starling', pay: 0, transit: { world: 'deep', to: 0 },
    brief: 'The third table is not a place round this sun. Climb, hold, and let the road take you.',
    transitText: ['The stars ahead bunch together and turn blue. The stars behind go red and thin out. The instruments read numbers that Su Song’s brass room would have understood better than you do.', 'Then it stops, all at once, and there is a world below with a violet sea and two small suns.'],
    arrive: [
      'There are lanterns along the landing ground. Somebody lights them every evening, a woman at the tea stall tells you, in case.',
      'At the end of the row a small patched star raft is pulled up on the sand, and beside it, in a deck chair, with a wrench in her lap and a logbook on her knee, an old woman is asleep in the sun. She opens one eye when your shadow falls on her. "You took the long way round," Nan says. "Good. Sit down. I have so much to show you."',
    ],
  },
];

export const EPILOGUE = 'The logbook has blank pages again. Take the Starling up whenever you like.';
