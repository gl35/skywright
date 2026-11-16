// The first-person view: canopy frame, nose and instrument panel drawn over the scene.

function dial(ctx, x, y, r, frac, col) {
  ctx.fillStyle = '#0c0f1a';
  ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.fill();
  ctx.strokeStyle = '#8a90a6'; ctx.lineWidth = 1; ctx.stroke();
  ctx.fillStyle = '#8a90a6';
  for (let i = 0; i <= 6; i++) { // tick marks round the lower three quarters
    const a = 2.36 + (i / 6) * 4.71;
    ctx.fillRect((x + Math.cos(a) * (r - 2)) | 0, (y + Math.sin(a) * (r - 2)) | 0, 1, 1);
  }
  const a = 2.36 + Math.max(0, Math.min(1, frac)) * 4.71;
  ctx.strokeStyle = col;
  ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * (r - 3), y + Math.sin(a) * (r - 3)); ctx.stroke();
}

// o: { speed, alt, fuel (each 0..1), roll, vz (-1..1), time, prop, nose (css colour) }
export function drawCockpit(ctx, W, H, o) {
  const U = Math.max(1, Math.round(Math.min(W, H) / 400));
  const ph = Math.round(H * (W > H ? 0.34 : 0.26)), top = H - ph;
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // nose of the aircraft ahead of the windscreen
  ctx.fillStyle = o.nose;
  ctx.beginPath(); ctx.ellipse(W / 2, top + 6, W * 0.15, H * 0.06, 0, 0, 6.283); ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.beginPath(); ctx.ellipse(W / 2, top + 9, W * 0.15, H * 0.05, 0, 0, 6.283); ctx.fill();
  if (o.prop) {
    ctx.strokeStyle = 'rgba(30,30,38,0.35)'; ctx.lineWidth = 2 * U;
    for (let b = 0; b < 3; b++) {
      const a = o.time * 33 + b * 1.05, rx = W * 0.2 * Math.cos(a), ry = H * 0.09 * Math.sin(a);
      ctx.beginPath(); ctx.moveTo(W / 2 - rx, top - H * 0.04 - ry); ctx.lineTo(W / 2 + rx, top - H * 0.04 + ry); ctx.stroke();
    }
  }

  // canopy frame
  ctx.strokeStyle = '#232735'; ctx.lineWidth = 4 * U;
  ctx.beginPath();
  ctx.moveTo(-2, H * 0.1); ctx.lineTo(W * 0.16, top + 6);
  ctx.moveTo(W + 2, H * 0.1); ctx.lineTo(W * 0.84, top + 6);
  ctx.stroke();

  // instrument panel
  ctx.fillStyle = '#1b1f2e';
  ctx.beginPath();
  ctx.moveTo(0, H); ctx.lineTo(0, top + 10); ctx.quadraticCurveTo(W / 2, top - 8, W, top + 10); ctx.lineTo(W, H);
  ctx.fill();
  ctx.strokeStyle = '#4b5168'; ctx.lineWidth = 2 * U;
  ctx.beginPath(); ctx.moveTo(0, top + 10); ctx.quadraticCurveTo(W / 2, top - 8, W, top + 10); ctx.stroke();

  const r = Math.max(8, Math.min(ph * 0.3, W * 0.1));
  const y = top + ph * 0.42;
  dial(ctx, W * 0.27, y, r, o.speed, '#ffd24a');
  dial(ctx, W * 0.73, y, r, o.alt, '#8fd4ee');

  // artificial horizon
  const cx = W / 2, R = r * 1.15;
  ctx.save();
  ctx.beginPath(); ctx.arc(cx, y, R, 0, 6.283); ctx.clip();
  ctx.translate(cx, y); ctx.rotate(-o.roll);
  ctx.fillStyle = '#4c9fe0'; ctx.fillRect(-R * 2, -R * 2, R * 4, R * 2 + o.vz * R * 0.6);
  ctx.fillStyle = '#8a5a34'; ctx.fillRect(-R * 2, o.vz * R * 0.6, R * 4, R * 2);
  ctx.fillStyle = '#fff'; ctx.fillRect(-R * 2, o.vz * R * 0.6 - 0.5, R * 4, 1);
  ctx.restore();
  ctx.strokeStyle = '#8a90a6'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(cx, y, R, 0, 6.283); ctx.stroke();
  ctx.fillStyle = '#ffd24a'; ctx.fillRect(cx - R * 0.5, y, R * 0.35, 1); ctx.fillRect(cx + R * 0.15, y, R * 0.35, 1); ctx.fillRect(cx, y, 1, 1);

  // fuel strip
  const fw = W * 0.3, fx = (W - fw) / 2, fy = y + R + 5;
  ctx.fillStyle = '#0c0f1a'; ctx.fillRect(fx, fy, fw, 4);
  ctx.fillStyle = o.fuel > 0.3 ? '#6fd05a' : o.fuel > 0.15 ? '#ffc23a' : '#e2503c';
  ctx.fillRect(fx, fy, fw * Math.max(0, Math.min(1, o.fuel)), 4);
}
