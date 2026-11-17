// Odd jobs: the locals pay for a right answer, not for turning up.
// Questions are sums, engineer's rules of thumb, and the odd riddle.

const pick = (a) => a[Math.floor(Math.random() * a.length)];
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

// Fixed questions: [question, right answer, three wrong answers, a line of explanation]
const FACTS = [
  ['Newton’s second law: F = ?', 'mass × acceleration', ['mass × velocity', 'mass ÷ acceleration', 'weight × speed'], 'Force is mass times acceleration.'],
  ['Ohm’s law: voltage V = ?', 'current × resistance', ['current ÷ resistance', 'power × current', 'resistance ÷ current'], 'V = I × R.'],
  ['Electrical power P = ?', 'voltage × current', ['voltage ÷ current', 'current × resistance', 'voltage + current'], 'P = V × I, in watts.'],
  ['Speed = ?', 'distance ÷ time', ['distance × time', 'time ÷ distance', 'distance + time'], 'How far, divided by how long.'],
  ['Density = ?', 'mass ÷ volume', ['mass × volume', 'volume ÷ mass', 'weight × height'], 'How much stuff in how much space.'],
  ['Pressure = ?', 'force ÷ area', ['force × area', 'area ÷ force', 'mass × height'], 'The same push on a smaller area presses harder.'],
  ['Work done = ?', 'force × distance', ['force ÷ distance', 'mass × time', 'power × force'], 'Push something a distance and you have done work.'],
  ['Kinetic energy = ?', '½ × mass × speed²', ['mass × speed', 'mass × height', '2 × mass × speed'], 'Double the speed and the energy goes up four times.'],
  ['The area of a circle is?', 'π × radius²', ['2 × π × radius', 'π × diameter', 'radius² ÷ π'], 'Pi r squared.'],
  ['The distance round a circle is?', '2 × π × radius', ['π × radius²', 'π ÷ radius', '4 × radius'], 'Two pi r, or pi times the diameter.'],
  ['In a right-angled triangle with short sides a and b, the long side c obeys?', 'a² + b² = c²', ['a + b = c', 'a × b = c²', 'a² − b² = c'], 'Pythagoras.'],
  ['The angles inside any triangle add up to?', '180°', ['90°', '270°', '360°'], 'Always 180 degrees.'],
  ['In flight, which force works against lift?', 'weight', ['thrust', 'drag', 'torque'], 'Lift against weight, thrust against drag.'],
  ['In flight, which force works against thrust?', 'drag', ['lift', 'weight', 'pressure'], 'Thrust against drag, lift against weight.'],
  ['Pure water boils at sea level at?', '100 °C', ['90 °C', '120 °C', '212 °C'], '100 degrees Celsius, which is 212 Fahrenheit.'],
  ['A small gear drives a large gear. The large gear turns?', 'slower, with more turning force', ['faster, with less force', 'at the same speed', 'the same way round, faster'], 'Gearing down trades speed for force.'],
  ['To undo an ordinary bolt you turn it?', 'anticlockwise', ['clockwise', 'either way', 'whichever is tighter'], 'Righty tighty, lefty loosey.'],
  ['A longer spanner makes a stiff nut?', 'easier to turn', ['harder to turn', 'no different', 'turn the other way'], 'A longer lever needs less force.'],
  ['As you climb higher, the air gets?', 'thinner and colder', ['thicker and warmer', 'thicker and colder', 'no different'], 'Which is why engines and wings struggle up high.'],
  ['Which of these does a wing need to make lift?', 'air moving over it', ['a heavy engine', 'warm weather', 'a tailwind'], 'No airflow, no lift.'],
  ['One kilometre is how many metres?', '1,000', ['100', '10,000', '1,609'], 'Kilo means a thousand.'],
  ['How many degrees in a full turn?', '360', ['180', '100', '400'], 'A full circle is 360 degrees.'],
];

const RIDDLES = [
  ['What has hands but cannot clap?', 'a clock', ['a glove', 'a statue', 'a scarecrow']],
  ['What has keys but opens no locks?', 'a piano', ['a jailer', 'a map', 'a chest']],
  ['What gets wetter the more it dries?', 'a towel', ['a sponge cake', 'the sea', 'a river']],
  ['What has a neck but no head?', 'a bottle', ['a giraffe', 'a shirt', 'a river']],
  ['What goes up and never comes down?', 'your age', ['a balloon', 'smoke', 'the tide']],
  ['The more you take, the more you leave behind. What are they?', 'footsteps', ['coins', 'breaths', 'photographs']],
  ['What has teeth but cannot bite?', 'a comb', ['a shark', 'a baby', 'a wolf']],
  ['What travels round the world while staying in one corner?', 'a postage stamp', ['a compass', 'the moon', 'a spider']],
  ['What has cities but no houses, and rivers but no water?', 'a map', ['a desert', 'a dream', 'a painting of fog']],
  ['I fly without wings and cry without eyes. What am I?', 'a cloud', ['a kite', 'the wind', 'a ghost']],
  ['What has one eye but cannot see?', 'a needle', ['a pirate', 'a storm cloud', 'a potato']],
  ['What can you catch but never throw?', 'a cold', ['a ball', 'a fish', 'a train']],
];

function numeric(q, right, why, spread) {
  const wrong = new Set();
  let guard = 0;
  while (wrong.size < 3 && guard++ < 60) {
    const w = right + pick(spread) * (Math.random() < 0.5 ? -1 : 1);
    if (w !== right && w > 0) wrong.add(w);
  }
  return [q, String(right), [...wrong].map(String), why];
}
function sum() {
  const kind = rnd(0, 5);
  if (kind === 0) { const a = rnd(6, 15), b = rnd(6, 15); return numeric(`${a} × ${b} = ?`, a * b, `${a} × ${b} = ${a * b}.`, [a, b, 10, 2, a + b]); }
  if (kind === 1) { const a = rnd(120, 480), b = rnd(60, 290); return numeric(`${a} + ${b} = ?`, a + b, `${a} + ${b} = ${a + b}.`, [10, 20, 100, 1, 11]); }
  if (kind === 2) { const b = rnd(4, 12), r = rnd(6, 14); return numeric(`${b * r} ÷ ${b} = ?`, r, `${b} × ${r} = ${b * r}.`, [1, 2, 3, 4]); }
  if (kind === 3) { const p = pick([10, 20, 25, 50, 75]), n = pick([40, 60, 80, 120, 160, 200]); return numeric(`What is ${p}% of ${n}?`, (p * n) / 100, `${p}% of ${n} is ${(p * n) / 100}.`, [5, 10, 20, 4]); }
  if (kind === 4) { const v = pick([120, 150, 180, 240, 300]), t = rnd(2, 5); return numeric(`An aeroplane flies at ${v} km/h for ${t} hours. How many km does it cover?`, v * t, `Distance is speed × time: ${v} × ${t} = ${v * t}.`, [v, 50, 100, v / 2]); }
  const d = pick([240, 360, 480, 600]), t = pick([2, 3, 4]); return numeric(`A flight of ${d} km takes ${t} hours. What was the average speed, in km/h?`, d / t, `Speed is distance ÷ time: ${d} ÷ ${t} = ${d / t}.`, [10, 20, 30, 40]);
}

let lastQ = '';
// Returns { q, options: [four strings], answer: index of the right one, why }.
export function makeQuestion() {
  let item;
  do {
    const r = Math.random();
    item = r < 0.4 ? sum() : r < 0.8 ? pick(FACTS) : pick(RIDDLES);
  } while (item[0] === lastQ);
  lastQ = item[0];
  const [q, right, wrong, why] = item;
  const options = [right, ...wrong];
  for (let i = options.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [options[i], options[j]] = [options[j], options[i]]; }
  return { q, options, answer: options.indexOf(right), right, why: why || `The answer is ${right}.` };
}
