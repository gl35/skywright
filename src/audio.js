// All sound is synthesised in the browser: an engine drone, a few beeps, and generated music.
// There are no audio files.

let ac = null, master, engGain, osc1, osc2, filt;
let muted = false;

export function initAudio() {
  if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ac = new AC();
  master = ac.createGain(); master.gain.value = muted ? 0 : 0.5; master.connect(ac.destination);
  filt = ac.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 420;
  engGain = ac.createGain(); engGain.gain.value = 0;
  osc1 = ac.createOscillator(); osc1.type = 'sawtooth';
  osc2 = ac.createOscillator(); osc2.type = 'square';
  osc1.connect(filt); osc2.connect(filt); filt.connect(engGain); engGain.connect(master);
  osc1.start(); osc2.start();
  startMusic();
}

// level 0..1 is how hard the engine is working; rough makes it stutter.
export function setEngine(on, level, rough, time) {
  if (!ac) return;
  const t = ac.currentTime;
  const f = 48 + level * 62;
  osc1.frequency.setTargetAtTime(f, t, 0.1);
  osc2.frequency.setTargetAtTime(f * 1.51, t, 0.1);
  filt.frequency.setTargetAtTime(300 + level * 500, t, 0.1);
  let g = on ? 0.03 + level * 0.04 : 0;
  if (rough && Math.sin(time * 23) + Math.sin(time * 37) > 0.6) g *= 0.15;
  engGain.gain.setTargetAtTime(g, t, 0.04);
}

export function beep(freq = 660, dur = 0.08, type = 'square', vol = 0.12) {
  if (!ac) return;
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(vol, ac.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
  o.connect(g); g.connect(master);
  o.start(); o.stop(ac.currentTime + dur);
}

let noiseBuf = null;
function noise() {
  if (!noiseBuf) {
    const n = ac.sampleRate;
    noiseBuf = ac.createBuffer(1, n, n);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  }
  const src = ac.createBufferSource();
  src.buffer = noiseBuf;
  return src;
}

export function thud(vol = 0.5, dur = 0.5) {
  if (!ac) return;
  const src = noise(), g = ac.createGain(), f = ac.createBiquadFilter(), t = ac.currentTime;
  f.type = 'lowpass'; f.frequency.value = 300;
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  src.connect(f); f.connect(g); g.connect(master);
  src.start(t, Math.random() * 0.5, dur);
}

export function toggleMute() {
  muted = !muted;
  if (master) master.gain.value = muted ? 0 : 0.5;
  return muted;
}

// ---------------------------------------------------------------------------------------------
// Music. A small step sequencer plays a bass line, broken chords, a soft pad and a tune.
// The tune is made up on the spot from the mood's scale: two short phrases arranged A B A C,
// rewritten every few bars so it never loops for long. Each world has its own mood.
// ---------------------------------------------------------------------------------------------

const MAJ = [0, 4, 7], MIN = [0, 3, 7], SUS = [0, 5, 7], OPEN = [0, 7, 12];
// root: MIDI note of the key. prog: bass note of each of four bars, as semitones from the root.
// chords: the chord on each bar. tune: how busy the melody is (0..1). echo: how much goes to the delay.
const MOODS = {
  calm: { bpm: 74, root: 48, scale: [0, 2, 4, 7, 9], prog: [0, 5, 0, 7], chords: [MAJ, MAJ, MAJ, MAJ], tune: 0.3, arp: 4, bass: [0], pad: 0.05, wave: 'triangle', echo: 0.35 },
  flight: { bpm: 104, root: 50, scale: [0, 2, 4, 7, 9], prog: [0, -3, 5, 7], chords: [MAJ, MIN, MAJ, MAJ], tune: 0.55, arp: 2, bass: [0, 6, 8, 14], pad: 0.035, wave: 'triangle', echo: 0.25, hat: true },
  era: { bpm: 80, root: 50, scale: [0, 2, 5, 7, 9], prog: [0, 0, 7, 5], chords: [OPEN, SUS, OPEN, SUS], tune: 0.6, arp: 0, bass: [0, 8], pad: 0.03, wave: 'pluck', echo: 0.3, block: true, bend: true },
  space: { bpm: 60, root: 45, scale: [0, 2, 4, 6, 7, 9, 11], prog: [0, 2, 0, -3], chords: [MAJ, MAJ, MAJ, MIN], tune: 0.22, arp: 8, bass: [0], pad: 0.07, wave: 'sine', echo: 0.6 },
  moon: { bpm: 54, root: 43, scale: [0, 2, 3, 7, 10], prog: [0, 0, -2, 0], chords: [OPEN, MIN, OPEN, SUS], tune: 0.18, arp: 8, bass: [0], pad: 0.07, wave: 'sine', echo: 0.65 },
  mars: { bpm: 88, root: 45, scale: [0, 2, 3, 5, 7, 9, 10], prog: [0, 5, -2, 0], chords: [MIN, MAJ, MAJ, MIN], tune: 0.4, arp: 2, bass: [0, 3, 8, 11], pad: 0.05, wave: 'sawtooth', echo: 0.35, hat: true },
  deep: { bpm: 66, root: 47, scale: [0, 2, 4, 6, 8, 10], prog: [0, 4, 2, 6], chords: [[0, 4, 8], [0, 4, 8], [0, 4, 8], [0, 4, 8]], tune: 0.35, arp: 4, bass: [0], pad: 0.07, wave: 'sine', echo: 0.6 },
};

let musicGain, delay, musicOn = true, moodName = 'calm', tense = false;
let step = 0, nextT = 0, timer = null, tune = [], tuneAge = 99;
try { musicOn = localStorage.getItem('skywright.music') !== 'off'; } catch { /* private mode */ }
const hz = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

function startMusic() {
  musicGain = ac.createGain(); musicGain.gain.value = musicOn ? 0.9 : 0; musicGain.connect(master);
  delay = ac.createDelay(1.5); delay.delayTime.value = 0.42;
  const fb = ac.createGain(), tone = ac.createBiquadFilter();
  fb.gain.value = 0.42; tone.type = 'lowpass'; tone.frequency.value = 1800;
  delay.connect(tone); tone.connect(fb); fb.connect(delay); tone.connect(musicGain);
  nextT = ac.currentTime + 0.1;
  timer = setInterval(pump, 60);
}

export function setMood(name, tension = false) {
  tense = tension;
  if (name === moodName || !MOODS[name]) return;
  moodName = name;
  tuneAge = 99; // write a new tune for the new mood
}
export function toggleMusic() {
  musicOn = !musicOn;
  if (musicGain) musicGain.gain.setTargetAtTime(musicOn ? 0.9 : 0, ac.currentTime, 0.2);
  try { localStorage.setItem('skywright.music', musicOn ? 'on' : 'off'); } catch { /* private mode */ }
  return musicOn;
}
export const musicIsOn = () => musicOn;

// One note. wave 'pluck' is a bright string with a fast decay, for the dynasty music.
function note(midi, t, dur, vol, wave, echo, bend) {
  const o = ac.createOscillator(), g = ac.createGain(), f = ac.createBiquadFilter();
  const pluck = wave === 'pluck';
  o.type = pluck ? 'sawtooth' : wave;
  o.frequency.setValueAtTime(hz(midi) * (bend ? 0.972 : 1), t);
  if (bend) o.frequency.exponentialRampToValueAtTime(hz(midi), t + 0.09); // slide up into the note
  f.type = 'lowpass';
  f.frequency.setValueAtTime(pluck ? 4200 : wave === 'sawtooth' ? 1400 : 3000, t);
  if (pluck) f.frequency.exponentialRampToValueAtTime(500, t + dur * 0.6);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + (pluck ? 0.005 : 0.02));
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(f); f.connect(g); g.connect(musicGain);
  if (echo) { const s = ac.createGain(); s.gain.value = echo; g.connect(s); s.connect(delay); }
  o.start(t); o.stop(t + dur + 0.05);
}
// A soft sustained chord.
function pad(midis, t, dur, vol) {
  const g = ac.createGain(), f = ac.createBiquadFilter();
  f.type = 'lowpass'; f.frequency.value = 650;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(vol, t + dur * 0.35);
  g.gain.linearRampToValueAtTime(0.0001, t + dur * 1.05);
  f.connect(g); g.connect(musicGain);
  for (const m of midis) for (const det of [-5, 6]) {
    const o = ac.createOscillator();
    o.type = 'sawtooth'; o.frequency.value = hz(m); o.detune.value = det;
    o.connect(f); o.start(t); o.stop(t + dur * 1.1);
  }
}
function tick(t, vol, freq, dur) {
  const src = noise(), g = ac.createGain(), f = ac.createBiquadFilter();
  f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 3;
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f); f.connect(g); g.connect(musicGain);
  src.start(t, Math.random() * 0.5, dur + 0.02);
}

// Make up a tune: 64 steps of scale positions (or null for a rest).
function writeTune(m) {
  const phrase = (start) => {
    const out = [];
    let d = start;
    for (let s = 0; s < 16; s++) {
      const strong = s % 4 === 0, mid = s % 2 === 0;
      const p = m.tune * (strong ? 1.5 : mid ? 0.8 : 0.3);
      if (Math.random() < p) {
        d = Math.max(0, Math.min(m.scale.length * 2 - 1, d + Math.round((Math.random() - 0.5) * 4)));
        out.push(d);
      } else out.push(null);
    }
    return out;
  };
  const mid = m.scale.length;
  const A = phrase(mid), B = phrase(mid + 1), C = phrase(mid - 1);
  C[12] = 0 + mid; C[14] = null; C[15] = null; // come home at the end
  tune = [...A, ...B, ...A, ...C];
}
const degree = (m, d) => m.scale[d % m.scale.length] + 12 * Math.floor(d / m.scale.length);

function playStep(m, s, t, len) {
  const bar = Math.floor(s / 16) % 4, q = s % 16;
  const base = m.root + m.prog[bar], chord = m.chords[bar];
  if (q === 0) pad([base, base + chord[1], base + chord[2]], t, len * 16, m.pad);
  if (m.bass.includes(q)) note(base - 12, t, len * 3, 0.11, 'triangle', 0);
  if (m.arp && q % m.arp === 0) {
    const i = (q / m.arp) % 4;
    note(base + 12 + [chord[0], chord[1], chord[2], chord[1] + 12][i], t, len * m.arp * 1.6, 0.035, m.wave === 'pluck' ? 'pluck' : 'triangle', m.echo);
  }
  const d = tune[s % 64];
  if (d !== null && d !== undefined) note(m.root + 12 + degree(m, d), t, len * (m.wave === 'sine' ? 7 : 3.2), m.wave === 'sawtooth' ? 0.04 : 0.075, m.wave, m.echo, m.bend && q % 4 === 0);
  if (m.hat && q % 2 === 1) tick(t, 0.012, 7000, 0.03);
  if (m.hat && q % 8 === 0) note(m.root - 24, t, 0.12, 0.09, 'sine', 0);
  if (m.block && (q === 0 || q === 6 || q === 8)) tick(t, 0.03, 1500, 0.05);
  if (tense && q % 2 === 0) note(m.root - 12 + (q % 4 === 0 ? 0 : 6), t, len * 1.2, 0.05, 'sawtooth', 0); // danger: a nagging pulse
}

// Called on a timer: queue up the next fraction of a second of music.
function pump() {
  if (!ac || ac.state !== 'running') return;
  if (nextT < ac.currentTime - 0.3) nextT = ac.currentTime + 0.05; // the tab was asleep: start again from now
  const m = MOODS[moodName], len = 60 / m.bpm / 4;
  while (nextT < ac.currentTime + 0.25) {
    if (step % 64 === 0) { tuneAge++; if (tuneAge >= 2) { writeTune(m); tuneAge = 0; } }
    if (musicOn) playStep(m, step, nextT, len);
    nextT += len;
    step++;
  }
}

// For the browser console: is the audio clock running, and how far has the sequencer got.
export const audioDebug = () => ({ state: ac ? ac.state : 'none', step, mood: moodName, musicOn, tense });
