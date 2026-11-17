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

for (const k of Object.keys(BIOMES)) BIOMES[k].id = k;

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
    blurb: "Nan's old biplane. Slow and leaky, but she flies.",
  },
  heron: {
    name: 'Heron', kind: 'Floatplane', tier: 1.3, nose: '#f2f4f5',
    speed: 19, ceil: 26, climb: 5.5, tank: 115, burn: 0.58, turn: 0.9, wear: 1.0, floats: true,
    start: { engine: 74, frame: 60, fuel: 82, avionics: 55, tank: 0.5 },
    blurb: 'Lands on water, so you can stop and fix things at sea.',
  },
  marlin: {
    name: 'Marlin', kind: 'Racing flying boat', tier: 1.5, nose: '#24407a',
    speed: 24, ceil: 24, climb: 6.5, tank: 95, burn: 0.62, turn: 1.15, wear: 1.15, floats: true,
    start: { engine: 64, frame: 70, fuel: 60, avionics: 58, tank: 0.5 },
    blurb: 'A racing flying boat. Fast, nimble, thirsty.',
  },
  dragonfly: {
    name: 'Dragonfly', kind: 'Clockwork ornithopter', tier: 1.6, nose: '#c9a24a',
    speed: 21, ceil: 26, climb: 7, tank: 100, burn: 0.42, turn: 1.5, wear: 1.1, floats: false,
    start: { engine: 66, frame: 52, fuel: 78, avionics: 70, tank: 0.6 },
    blurb: 'Four beating wings. Turns on a coin.',
  },
  kestrel: {
    name: 'Kestrel', kind: 'Twin turboprop', tier: 2, nose: '#d2d8dd',
    speed: 25, ceil: 40, climb: 8, tank: 170, burn: 0.8, turn: 0.8, wear: 0.85, floats: false,
    start: { engine: 62, frame: 80, fuel: 70, avionics: 48, tank: 0.5 },
    blurb: 'Climbs over mountains and most storms.',
  },
  comet: {
    name: 'Comet', kind: 'Light jet', tier: 2.6, nose: '#f5f7fa',
    speed: 34, ceil: 58, climb: 12, tank: 250, burn: 1.25, turn: 0.7, wear: 0.7, floats: false,
    start: { engine: 78, frame: 70, fuel: 58, avionics: 74, tank: 0.55 },
    blurb: 'Fast, high, long range.',
  },
  meteor: {
    name: 'Meteor', kind: 'Rocket plane', tier: 3.2, nose: '#4f5564',
    speed: 44, ceil: 95, climb: 16, tank: 300, burn: 1.8, turn: 0.6, wear: 0.65, floats: false, space: 1,
    start: { engine: 70, frame: 64, fuel: 72, avionics: 60, tank: 0.6 },
    blurb: 'Reaches the edge of space. Twice as fast up there.',
  },
  ark: {
    name: "Tinker's Ark", kind: 'Patchwork airship with a door', tier: 1.8, nose: '#7a4f2e',
    speed: 15, ceil: 30, climb: 3.5, tank: 260, burn: 0.34, turn: 0.6, wear: 0.7, floats: true, hover: true,
    start: { engine: 60, frame: 55, fuel: 68, avionics: 50, tank: 0.7 },
    blurb: 'Hovers, lands anywhere, and has a very odd door.',
  },
  starling: {
    name: 'Starling', kind: 'Star raft', tier: 4, nose: '#f4f5f7',
    speed: 40, ceil: 220, climb: 22, tank: 420, burn: 3, turn: 0.55, wear: 0.6, floats: false, space: 5, orbit: true,
    start: { engine: 72, frame: 78, fuel: 66, avionics: 62, tank: 0.8 },
    blurb: 'Reaches orbit and beyond. Come down gently.',
  },
};

// What makes each machine different.
// ability: a move on a button, lasting `dur` seconds with `cd` seconds to recover.
// surf: how it gets about once it is down. water: sails. land 'flat': taxis on level ground. land 'climb': walks over rough ground.
const EXTRA = {
  sparrow: { ability: { id: 'loop', name: 'LOOP', dur: 2.2, cd: 8, desc: 'Dodges storms, frees jammed controls.' }, surf: { land: 'flat' } },
  marlin: { ability: { id: 'race', name: 'RACE', dur: 4, cd: 12, desc: '+50% speed, double fuel.' }, surf: { water: true } },
  heron: { ability: { id: 'lean', name: 'LEAN', dur: 14, cd: 20, desc: 'Burns a third of the fuel.' }, surf: { water: true } },
  dragonfly: { ability: { id: 'hover', name: 'HOVER', dur: 6, cd: 5, desc: 'Stops in mid-air.' }, surf: { land: 'climb' } },
  kestrel: { ability: { id: 'highclimb', name: 'CLIMB', dur: 7, cd: 18, desc: 'Climbs fast, past its ceiling.' }, surf: { land: 'flat' } },
  comet: { ability: { id: 'burner', name: 'BURNER', dur: 5, cd: 15, desc: 'Much faster, triple fuel.' }, surf: { land: 'flat' } },
  meteor: { ability: { id: 'zoom', name: 'ZOOM', dur: 3, cd: 15, desc: 'Straight up, very fast.' }, surf: { land: 'flat' } },
  ark: { ability: { id: 'mend', name: 'MEND', dur: 9, cd: 25, desc: 'Stops and patches broken parts. No kit needed.' }, surf: { water: true, land: 'flat' } },
  starling: { ability: { id: 'shield', name: 'SHIELD', dur: 8, cd: 20, desc: 'No heat or storm damage.' }, surf: { land: 'flat' } },
};
for (const k of Object.keys(EXTRA)) Object.assign(AIRCRAFT[k], EXTRA[k]);
export const surfText = (A) => {
  const w = A.surf.water, l = A.surf.land;
  if (w && l) return 'Sails and taxis.';
  if (w) return 'Sails. No wheels.';
  return l === 'climb' ? 'Walks over rough ground.' : 'Taxis on flat ground.';
};

// Upgrades are your own skills and tools, so they carry over to every machine you fly.
export const UPGRADES = {
  engine: { name: 'Engine tuning', desc: '+8% speed and climb' },
  tank: { name: 'Fuel trimming', desc: '+15% range' },
  frame: { name: 'Bracing and doping', desc: 'Parts wear 15% slower' },
  avionics: { name: 'Instruments', desc: 'Storm radar. 20% fewer breakdowns' },
};
export const UP_COST = [200, 500, 1000];
export const KIT_COST = 40;
export const KIT_CAP_COST = 120;
export const KIT_CAP_MAX = 5;

export const START_SAVE = () => ({
  v: 2, mission: 0, money: 140,
  fleet: {}, up: { engine: 0, tank: 0, frame: 0, avionics: 0 },
  kits: 2, kitCap: 3, shift: false, seen: {},
});

export const INTRO = {
  title: 'The logbook',
  nan: '"Fly the long way round first. Then try the key."',
  body: ['Nan circled the world in 1938 and never said where she went. She left you a biplane, a logbook and a brass key.', 'Fix the Sparrow. Head east.'],
};

// One entry per mission, in order. Each names the machine you must fly.
// transit: the flight leaves this world (climb high and hold) and ends on another one.
// Keep every line short: nobody reads a wall of text in a flying game.
export const MISSIONS = [
  // ---------- Chapter 1: the long way round ----------
  {
    ch: 'Chapter 1 · The Long Way Round', title: 'First light', world: 'earth', from: 0, to: 1, craft: 'sparrow', pay: 420,
    brief: 'Fly the mail to Port Calloway. Pack a repair kit.',
    arrive: ['"I know this plane," says the harbour master. "A woman flew it in before the war and left on that floatplane."', 'The Heron is yours. Next: open ocean.'],
  },
  {
    title: 'Open water', world: 'earth', from: 1, to: 2, craft: 'heron', pay: 520,
    brief: 'Open sea all the way. The Heron can land on water.',
    arrive: ['On the radio shack wall: a photo of Nan with this same Heron.', '"She kept asking about a ship in the sky with no engines." There is a racing flying boat here too. Take either.'],
  },
  {
    title: 'Storm alley', world: 'earth', from: 2, to: 3, craft: 'heron', pay: 620, also: ['marlin'],
    brief: 'Storms ahead. Go round them or stay low.',
    arrive: ['A clockmaker studies Nan’s strange pages. "Not a language. A parts list."', 'He has built a machine that beats its wings. Only it can thread the mountain passes.'],
  },
  {
    title: 'The passes', world: 'earth', from: 3, to: 4, craft: 'dragonfly', pay: 720,
    brief: 'The peaks are too high to climb. Follow the valleys.',
    arrive: ['In a cave behind the monastery: a wrecked airship with a brass-locked door.', '"She went through," says the abbot. "She came out older." The monks will ship it home. Finish the lap.'],
  },
  {
    title: 'Over the top', world: 'earth', from: 4, to: 5, craft: 'kestrel', pay: 860,
    brief: 'A borrowed Kestrel. Climb over the mountains and the storms.',
    arrive: ['Frostholm, 1938: a compass needle pointed straight up for six minutes.', 'Nan signed the visitors’ book that week. Occupation: "carpenter."'],
  },
  {
    title: 'The long crossing', world: 'earth', from: 5, to: 6, craft: 'comet', pay: 1000,
    brief: 'The longest leg, mostly ocean. Watch the fuel.',
    arrive: ['Dredged from the crater lake: a bronze earthquake bowl, eighteen centuries old.', 'Stamped inside the rim: a wren.'],
  },
  {
    title: 'Ash and rain', world: 'earth', from: 6, to: 7, craft: 'comet', pay: 1100,
    brief: 'Rough air and storms. Two legs to go.',
    arrive: ['A stranded test pilot hands you her rocket plane.', '"Go high enough and you will see a road on the ocean that is on no chart."'],
  },
  {
    title: 'The edge of the sky', world: 'earth', from: 7, to: 8, craft: 'meteor', pay: 1200,
    brief: 'Home. Climb till the sky goes black, then come down gently.',
    arrive: ['All the way round. A crate the size of a house is waiting: the Ark.', 'The key turns. The door opens on a river meadow in spring.'],
  },
  // ---------- Chapter 2: the door in the Ark ----------
  {
    ch: 'Chapter 2 · The Door in the Ark', title: 'Han: the listening bronze', world: 'han', from: 0, to: 1, craft: 'ark', pay: 900,
    brief: 'The year is 132. Follow the river to Luoyang.',
    arrive: ['Zhang Heng, court astronomer, walks round the Ark. "You are the second."', 'He has eight earthquake bowls. Seven point at the sky. "Things fall along roads up there." He gives you the chart.'],
    real: 'Real: Zhang Heng’s seismoscope, 132 CE. Invented: the other seven, and the sky roads.',
  },
  {
    title: 'Tang: the monk who measured the world', world: 'tang', from: 0, to: 1, craft: 'ark', pay: 900,
    brief: 'The year is 725. Fly north to Chang’an, the biggest city on Earth.',
    arrive: ['A market of forty languages. The monk Yi Xing has just measured the Earth.', 'His water clock ticks with a tiny rocking gate. He fits a copy to the Ark’s engines.'],
    real: 'Real: Yi Xing’s survey and water-driven globe, about 725. Invented: the gift.',
  },
  {
    title: 'Song: the tower that kept the sky', world: 'song', from: 0, to: 1, craft: 'ark', pay: 900,
    brief: 'The year is 1092. Follow the Yellow River to Kaifeng’s clock tower.',
    arrive: ['Kaifeng: night markets, paper money, printed books.', 'Su Song’s clock tower hides a room that tracks the Moon, Mars and a third place. He copies you the tables. Nan’s script was always numbers.'],
    real: 'Real: Su Song’s clock tower, about 1094. Invented: the hidden room.',
  },
  {
    title: 'Ming: the star raft', world: 'ming', from: 0, to: 1, craft: 'ark', pay: 900,
    brief: 'The year is 1405. Fly downriver to the treasure fleet’s shipyard.',
    arrive: ['The sailors call the great ships star rafts.', 'Aunt Ruan, shipwright, shows you a hull never meant for water. "It needs an engine that does not exist." You can build it now. She hands you the drawing.'],
    real: 'Real: the Longjiang shipyard and Zheng He’s "star rafts", 1405. Invented: Aunt Ruan’s drawing.',
  },
  // ---------- Chapter 3: star raft ----------
  {
    ch: 'Chapter 3 · Star Raft', title: 'First orbit', world: 'earth', from: 0, to: 8, craft: 'starling', pay: 1500,
    brief: 'Take the Starling round the world. Climb to the black sky, coast, come down slowly.',
    arrive: ['One lap in one flight.', 'From orbit you see it: a straight track of light running to the Moon.'],
  },
  {
    title: 'The Moon', world: 'earth', from: 0, craft: 'starling', pay: 2000, transit: { world: 'moon', to: 0 },
    brief: 'Climb above 100 km and hold. She makes the burn herself. Low gravity: land gently.',
    transitText: ['Three days. Earth shrinks to a blue coin, then the Moon fills the windscreen.'],
    arrive: ['A landing ring of fitted stone, and a dome.', 'Inside: a mallet marked O.W. and a bronze bowl. Its dragons point at a red star.'],
  },
  {
    title: 'Mars', world: 'moon', from: 0, craft: 'starling', pay: 2500, transit: { world: 'mars', to: 0 },
    brief: 'Follow the dragons. Lift off, climb and hold. Beware dust storms.',
    transitText: ['Eleven days on the road. Mars comes up the colour of rust.'],
    arrive: ['A dry dock in a canyon, and a half-built ship.', 'Chalked on a rib, in Nan’s hand: "Ran out of timber. Gone ahead. Bring tea."'],
  },
  {
    title: 'The wide universe', world: 'mars', from: 0, craft: 'starling', pay: 0, transit: { world: 'deep', to: 0 },
    brief: 'The third table is not round this sun. Climb, hold, let the road take you.',
    transitText: ['The stars bunch up and turn blue. Then: a violet sea and two small suns.'],
    arrive: ['Lanterns line the landing ground. Someone lights them every evening, in case.', 'An old woman in a deck chair opens one eye. "You took the long way round," says Nan. "Good. Sit down."'],
  },
];

export const EPILOGUE = 'The logbook has blank pages again. Fly anywhere.';

// One optional job on the way for each flight, keyed by mission number.
// t: how far along the route (0..1). off: how far to one side. type:
//   low  = pass low over the marker      pass = fly through the marker at any height
//   land = set down inside the marker    high = climb above `alt` anywhere on the flight
export const TASKS = {
  0: { prop: 'lighthouse', type: 'low', t: 0.5, off: -130, pay: 120, label: 'Drop newspapers: fly low over the lighthouse', after: 'Right on the keeper’s doorstep.' },
  1: { prop: 'boat', type: 'land', water: true, t: 0.45, off: 150, pay: 220, label: 'Help the fishing boat: land beside it', after: 'A fuel filter and a flask of tea. He is under way.' },
  2: { prop: 'buoy', water: true, type: 'pass', t: 0.5, off: -160, pay: 150, label: 'Fly over the weather buoy', after: 'Readings noted. The glass is falling.' },
  3: { prop: 'tents', type: 'land', t: 0.55, off: 110, pay: 240, label: 'Medicine for the camp: land there', after: 'The doctor’s parcel is delivered.' },
  4: { type: 'high', alt: 34, pay: 200, label: 'Survey photo: climb above 17,000 ft', after: 'The whole range under your wing. Click.' },
  5: { prop: 'icebreaker', water: true, type: 'pass', t: 0.4, off: 190, pay: 180, label: 'Fly over the icebreaker', after: 'A hundred tiny arms wave.' },
  6: { prop: 'vent', type: 'low', t: 0.5, off: -170, pay: 220, label: 'Drop the sensor: fly low over the crater', after: 'Into the steam it goes.' },
  7: { type: 'high', alt: 80, pay: 250, label: 'Climb till the sky is black', after: 'There: a straight line on the sea.' },
  8: { prop: 'hut', type: 'land', t: 0.5, off: 120, pay: 260, label: 'Collect the casting: land at the foundry', after: 'One bronze dragon head, still warm.' },
  9: { prop: 'kite', type: 'pass', t: 0.45, off: -140, pay: 200, label: 'Fly past the survey kite', after: 'A kite, a plumb line, a brave monk’s notebook.' },
  10: { prop: 'hut', type: 'low', t: 0.5, off: 150, pay: 220, label: 'Drop handbills: fly low over the town', after: 'A thousand printed sheets flutter down.' },
  11: { prop: 'rafts', type: 'land', water: true, t: 0.5, off: -150, pay: 260, label: 'Take on teak: land by the rafts', after: 'The raftsmen laugh at your paddle wheels.' },
  12: { type: 'high', alt: 175, pay: 300, label: 'Reach orbit: climb above 100 km', after: 'The engines go quiet. You are falling round the world.' },
};

// The Ark's door. Each dynasty opens once the story has taken you there (the number is its mission).
export const DOOR = [['han', 8], ['tang', 9], ['song', 10], ['ming', 11]];

// Three things to find on a visit to each dynasty: fly low over the blue beam.
// text is what you see; note separates the record from the story's invention.
export const ERA_FINDS = {
  han: [
    { id: 'han_paper', title: 'The paper makers', text: 'Bark, hemp and old nets, pulped and dried into sheets.', note: 'Real: Cai Lun, 105 CE. Invented: the biplane sketched on one sheet.' },
    { id: 'han_bellows', title: 'The water bellows', text: 'A waterwheel pumps the furnace bellows. Nobody on the treadles.', note: 'Real: Du Shi, 31 CE. Invented: the two sisters who run it.' },
    { id: 'han_road', title: 'The western road', text: 'Camels from the west, carrying glass, horses and grape vines.', note: 'Real: the Silk Road. Invented: the trader who has seen your ship before.' },
  ],
  tang: [
    { id: 'tang_pagoda', title: 'The Wild Goose Pagoda', text: 'Brick storeys over the monastery where Xuanzang translated his scriptures.', note: 'Real: built 652, raised 704. Invented: the wren scratched near the top.' },
    { id: 'tang_polo', title: 'Polo on the palace ground', text: 'Riders in silk chase a fist-sized ball. The women play as hard as the men.', note: 'Real: the Tang court loved polo. Invented: the rider who salutes you.' },
    { id: 'tang_canal', title: 'The Grand Canal', text: 'Grain barges nose to tail, feeding a city of a million.', note: 'Real: finished 609. Invented: nothing. It was that big.' },
  ],
  song: [
    { id: 'song_type', title: 'The printer’s shop', text: 'Each character is a clay block: set, inked, pressed, reused.', note: 'Real: Bi Sheng, about 1040. Invented: today’s handbill, for a flying ship.' },
    { id: 'song_compass', title: 'The needle that points south', text: 'A magnet needle floats in a bowl. It points a little east of south.', note: 'Real: Shen Kuo, 1088. Invented: his list of faults in your compass.' },
    { id: 'song_bridge', title: 'The rainbow bridge', text: 'A timber arch crosses the river in one span. Half the city is on it, buying snacks.', note: 'Real: Kaifeng’s rainbow bridge. Invented: the snack seller who wants to hire the Ark.' },
  ],
  ming: [
    { id: 'ming_wall', title: 'The longest wall', text: 'Thirty kilometres of wall. Every brick is stamped with its maker’s name.', note: 'Real: built 1366 to 1393. Invented: one brick with a name you know.' },
    { id: 'ming_book', title: 'The encyclopedia', text: 'Two thousand scholars copy everything worth knowing into eleven thousand volumes.', note: 'Real: the Yongle Encyclopedia, 1403 to 1408. Invented: the flying-machine entry you correct.' },
    { id: 'ming_dock', title: 'The dry docks', text: 'Build the hull on the dry floor, open the gate, and the river floats her out.', note: 'Real: the Longjiang basins. Invented: Aunt Ruan waving from the gate.' },
  ],
};
