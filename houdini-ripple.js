/**
 * Houdini CSS Paint Worklet — Ripple Circles
 * Draws concentric circle rings as a decorative background.
 * Controlled via CSS custom properties:
 *   --ripple-color   : ring color (default rgba(255,255,255,0.15))
 *   --ripple-count   : number of rings (default 4)
 *   --ripple-width   : stroke width of each ring (default 1.5)
 */
registerPaint('ripple-circles', class {
  static get inputProperties() {
    return [
      '--ripple-color',
      '--ripple-count',
      '--ripple-width',
    ];
  }

  paint(ctx, size, props) {
    const color = props.get('--ripple-color').toString().trim() || 'rgba(255,255,255,0.15)';
    const count = parseInt(props.get('--ripple-count'))         || 4;
    const lw    = parseFloat(props.get('--ripple-width'))       || 1.5;

    const cx = size.width  / 2;
    const cy = size.height / 2;
    const maxR = Math.sqrt(cx * cx + cy * cy);
    const step = maxR / count;

    ctx.strokeStyle = color;
    ctx.lineWidth   = lw;

    for (let i = 1; i <= count; i++) {
      ctx.beginPath();
      ctx.arc(cx, cy, step * i, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
});
