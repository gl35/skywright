// Static game data: biomes, the round-the-world route, aircraft, upgrades and story.

const rgb = (h) => [(h >> 16) & 255, (h >> 8) & 255, h & 255];

// land[1..11] are the colours of terrain height levels 1..11; water is deep, mid, shallow, foam.
function biome(def) {
  const land = [rgb(def.land[0])].concat(def.land.map(rgb)); // index 0 unused (wet sand)
  land[0] = land[1].map((c) => c * 0.8);
  return {
    ...def,
    pal: {
      land,
      side: land.map((c) => c.map((v) => v * 0.62)),
      water: def.water.map(rgb),
    },
  };
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
};

// The route heads east all the way round and ends back at the home field.
export const STOPS = [
  { name: 'Wrenfield', tag: 'Home field', biome: 'temperate', x: 0, y: 0 },
  { name: 'Port Calloway', tag: 'Harbour town', biome: 'temperate', x: 1300, y: -180 },
  { name: 'Mango Key', tag: 'Tropical outpost', biome: 'tropical', x: 2900, y: 220 },
  { name: 'Saffron Quay', tag: 'Desert trading port', biome: 'desert', x: 4800, y: -120 },
  { name: 'Highgate', tag: 'Mountain airstrip', biome: 'alpine', x: 6800, y: 260 },
  { name: 'Frostholm', tag: 'Polar research station', biome: 'arctic', x: 9200, y: -260 },
  { name: 'Cinder Reach', tag: 'Volcano observatory', biome: 'volcanic', x: 12200, y: 150 },
  { name: 'Juniper Atoll', tag: 'Last stop before home', biome: 'tropical', x: 14800, y: -200 },
  { name: 'Wrenfield', tag: 'Home field, the long way round', biome: 'temperate', x: 17000, y: 0 },
];

export const PARTS = {
  engine: { name: 'Engine', fail: 'ENGINE MISFIRE', effect: 'Half power' },
  frame: { name: 'Airframe', fail: 'JAMMED AILERON', effect: 'Sluggish, pulls right' },
  fuel: { name: 'Fuel system', fail: 'FUEL LEAK', effect: 'Burning fuel 4x faster' },
  avionics: { name: 'Avionics', fail: 'AVIONICS BLACKOUT', effect: 'Navigation is dark' },
};
export const PART_KEYS = Object.keys(PARTS);

export const AIRCRAFT = {
  sparrow: {
    name: 'Sparrow', kind: 'Vintage biplane trainer', tier: 1, from: 0, cost: 0,
    speed: 16, ceil: 20, climb: 5, tank: 70, burn: 0.5, turn: 0.95, wear: 1.25, floats: false,
    blurb: 'Nan\'s old biplane. Slow, thirsty and leaky, but she flies.',
  },
  heron: {
    name: 'Heron', kind: 'Floatplane', tier: 1.4, from: 1, cost: 700,
    speed: 19, ceil: 26, climb: 5.5, tank: 105, burn: 0.58, turn: 0.9, wear: 1.0, floats: true,
    blurb: 'Lands on water. If something breaks over the ocean, you can set down and fix it.',
  },
  // hover: can slow to a stop in the air, so it can set down almost anywhere
  ark: {
    name: "Tinker's Ark", kind: 'Patchwork airship', tier: 1.6, from: 2, cost: 1300,
    speed: 12.5, ceil: 30, climb: 3.5, tank: 260, burn: 0.34, turn: 0.6, wear: 0.7, floats: true, hover: true,
    blurb: 'A boat hull slung under a quilt of gas bags. Slow, but it can hover, settle on land or water, and go a very long way on a tank.',
  },
  dragonfly: {
    name: 'Dragonfly', kind: 'Clockwork ornithopter', tier: 1.8, from: 4, cost: 1500,
    speed: 21, ceil: 26, climb: 7, tank: 85, burn: 0.42, turn: 1.5, wear: 1.1, floats: false,
    blurb: 'Four beating wings of brass and oiled silk. Turns on a coin, which is what you want in a mountain valley.',
  },
  kestrel: {
    name: 'Kestrel', kind: 'Twin turboprop', tier: 2, from: 3, cost: 1900,
    speed: 25, ceil: 40, climb: 8, tank: 150, burn: 0.8, turn: 0.8, wear: 0.85, floats: false,
    blurb: 'Climbs over the high ranges and over most storm tops.',
  },
  comet: {
    name: 'Comet', kind: 'Light jet', tier: 3, from: 5, cost: 3600,
    speed: 34, ceil: 58, climb: 12, tank: 230, burn: 1.25, turn: 0.7, wear: 0.7, floats: false,
    blurb: 'Fast and high. Crosses the long ocean legs with fuel to spare.',
  },
  // space: how many times faster the craft gets in thin air near its ceiling
  meteor: {
    name: 'Meteor', kind: 'Rocket plane', tier: 3.6, from: 6, cost: 6000,
    speed: 44, ceil: 95, climb: 16, tank: 300, burn: 1.8, turn: 0.6, wear: 0.65, floats: false, space: 1,
    blurb: 'Climbs to the edge of space, where the sky goes black and the thin air doubles its speed.',
  },
  starling: {
    name: 'Starling', kind: 'Orbital starship', tier: 4.5, from: 0, lap: true, cost: 9000,
    speed: 40, ceil: 220, climb: 22, tank: 420, burn: 3, turn: 0.55, wear: 0.6, floats: false, space: 5, orbit: true,
    blurb: 'Reaches orbit. One lap of the world in a single flight. Come back down gently or the heat will eat the hull.',
  },
};

export const UPGRADES = {
  engine: { name: 'Engine tune', desc: '+8% speed and climb per level' },
  tank: { name: 'Long-range tank', desc: '+15% fuel per level' },
  frame: { name: 'Reinforced airframe', desc: 'All parts wear 15% slower per level' },
  avionics: { name: 'Avionics suite', desc: 'Level 1 adds storm radar. Each level cuts breakdowns by 20%' },
};
export const UP_COST = [150, 350, 700];
export const KIT_COST = 40;
export const KIT_CAP_COST = 120;
export const KIT_CAP_MAX = 5;

export const START_SAVE = () => ({
  v: 1,
  stop: 0,
  money: 140,
  current: 'sparrow',
  fleet: {
    sparrow: {
      cond: { engine: 58, frame: 72, fuel: 54, avionics: 66 },
      up: { engine: 0, tank: 0, frame: 0, avionics: 0 },
      fuel: 30,
    },
  },
  kits: 1,
  kitCap: 2,
  shift: false,
  seen: {},
  done: false,
});

// One logbook page per stop. `nan` is the old entry, `you` is the player's own note.
export const STORY = [
  {
    title: 'The Sparrow',
    nan: '"I got as far as Highgate before the mountains turned me back. I always meant to try again."',
    you: 'Nan left you two things: her logbook and the Sparrow she built it in. You are a pilot and an engineer, same as she was. The engine is tired and the fuel lines weep, so fix what you can afford, fill the tank and head east. All the way round, back to Wrenfield.',
  },
  {
    title: 'Port Calloway',
    nan: '"First leg done. Something always shakes loose on the first leg. Carry spare kits."',
    you: 'The harbour master pays you for the mail sack. A floatplane called the Heron is for sale by the slipway. It can land on water, which matters when the next field is a long way off.',
  },
  {
    title: 'Mango Key',
    nan: '"Warm rain and tall clouds. The dark ones bite. Go round them or go under."',
    you: 'Storm cells build fast out here. They chew through the airframe and fry the electrics. The Sparrow cannot climb over them.',
  },
  {
    title: 'Saffron Quay',
    nan: '"Dust in everything. I rebuilt the carburettor on a carpet in the market."',
    you: 'A trader shows you a twin turboprop, the Kestrel. East of here the ground rises higher than the Sparrow can fly.',
  },
  {
    title: 'Highgate',
    nan: '"This is where I stopped. The passes were shut and the engine had nothing left. Go further than I did."',
    you: 'Nan\'s last entry. From here on the logbook pages are blank, and they are yours to fill.',
  },
  {
    title: 'Frostholm',
    you: 'First new page. Ice from horizon to horizon. The station crew keep a small jet, the Comet, that they will part with for the right price. The next legs are the longest of the trip.',
  },
  {
    title: 'Cinder Reach',
    you: 'Black sand and glowing peaks. The air over the volcanoes is rough and the storms never really clear. Two legs to go.',
  },
  {
    title: 'Juniper Atoll',
    you: 'A strip of coral barely longer than the runway. One more leg. Check everything twice.',
  },
  {
    title: 'Wrenfield, again',
    you: 'You come in over the same hedgerow you left by. All the way round. You write the last line in Nan\'s logbook and sign it with both your names.',
  },
];
