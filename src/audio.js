// Tiny synthesised sound: an engine drone and a few beeps. No audio files.

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
}

// level 0..1 is how hard the engine is working; rough makes it stutter.
export function setEngine(on, level, rough, time) {
  if (!ac) return;
  const t = ac.currentTime;
  const f = 48 + level * 62;
  osc1.frequency.setTargetAtTime(f, t, 0.1);
  osc2.frequency.setTargetAtTime(f * 1.51, t, 0.1);
  filt.frequency.setTargetAtTime(300 + level * 500, t, 0.1);
  let g = on ? 0.05 + level * 0.05 : 0;
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

export function thud(vol = 0.5, dur = 0.5) {
  if (!ac) return;
  const n = Math.floor(ac.sampleRate * dur);
  const buf = ac.createBuffer(1, n, ac.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n) ** 2;
  const src = ac.createBufferSource(), g = ac.createGain(), f = ac.createBiquadFilter();
  f.type = 'lowpass'; f.frequency.value = 300;
  src.buffer = buf; g.gain.value = vol;
  src.connect(f); f.connect(g); g.connect(master);
  src.start();
}

export function toggleMute() {
  muted = !muted;
  if (master) master.gain.value = muted ? 0 : 0.5;
  return muted;
}
