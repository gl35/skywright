// Keyboard, touch stick and throttle slider, folded into one small state object.

import { clamp } from './noise.js';

export const input = { turn: 0, pitch: 0, throttle: 0.7, action: false };
// realStick: pull back (down) to climb, like an aeroplane. Off: push up to climb.
export const settings = { realStick: true };
try { settings.realStick = localStorage.getItem('skywright.stick') !== 'push'; } catch { /* private mode */ }
export function toggleStick() {
  settings.realStick = !settings.realStick;
  try { localStorage.setItem('skywright.stick', settings.realStick ? 'pull' : 'push'); } catch { /* private mode */ }
  return settings.realStick;
}
const keys = new Set();
const stick = { id: null, ox: 0, oy: 0, x: 0, y: 0 };
let onAction = () => {}, onKey = () => {};

export function initInput(canvas, slider, handlers) {
  onAction = handlers.action; onKey = handlers.key;
  window.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    keys.add(e.code);
    if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); onAction(); }
    onKey(e.code);
  });
  window.addEventListener('keyup', (e) => keys.delete(e.code));
  window.addEventListener('blur', () => keys.clear());

  // Drag anywhere on the picture: left/right turns, up climbs, down descends.
  canvas.addEventListener('pointerdown', (e) => {
    if (stick.id !== null) return;
    stick.id = e.pointerId; stick.ox = e.clientX; stick.oy = e.clientY; stick.x = stick.y = 0;
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerId !== stick.id) return;
    stick.x = clamp((e.clientX - stick.ox) / 55, -1, 1);
    stick.y = clamp((e.clientY - stick.oy) / 55, -1, 1);
  });
  const end = (e) => { if (e.pointerId === stick.id) { stick.id = null; stick.x = stick.y = 0; } };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);

  const setThr = (e) => {
    const r = slider.getBoundingClientRect();
    input.throttle = clamp(1 - (e.clientY - r.top) / r.height, 0, 1);
  };
  slider.addEventListener('pointerdown', (e) => { slider.setPointerCapture(e.pointerId); setThr(e); });
  slider.addEventListener('pointermove', (e) => { if (e.buttons || e.pointerType === 'touch') setThr(e); });
}

export function pollInput(dt) {
  const k = (c) => keys.has(c);
  const kt = (k('ArrowRight') || k('KeyD') ? 1 : 0) - (k('ArrowLeft') || k('KeyA') ? 1 : 0);
  const kp = (k('ArrowUp') || k('KeyW') ? 1 : 0) - (k('ArrowDown') || k('KeyS') ? 1 : 0);
  input.turn = clamp(kt + stick.x, -1, 1);
  input.pitch = clamp((kp - stick.y) * (settings.realStick ? -1 : 1), -1, 1);
  const th = (k('KeyE') || k('ShiftLeft') ? 1 : 0) - (k('KeyQ') ? 1 : 0);
  if (th) input.throttle = clamp(input.throttle + th * dt * 0.7, 0, 1);
}
export const stickState = stick;
