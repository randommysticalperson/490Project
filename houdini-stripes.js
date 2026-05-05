/**
 * Houdini CSS Paint Worklet — Diagonal Stripes
 * Draws subtle diagonal stripes as a background.
 * Controlled via CSS custom properties:
 *   --stripe-color   : stripe color (default rgba(255,255,255,0.08))
 *   --stripe-width   : width of each stripe in px (default 6)
 *   --stripe-gap     : gap between stripes in px (default 18)
 */
registerPaint('diagonal-stripes', class {
  static get inputProperties() {
    return [
      '--stripe-color',
      '--stripe-width',
      '--stripe-gap',
    ];
  }

  paint(ctx, size, props) {
    const color = props.get('--stripe-color').toString().trim() || 'rgba(255,255,255,0.08)';
    const sw    = parseFloat(props.get('--stripe-width'))       || 6;
    const gap   = parseFloat(props.get('--stripe-gap'))         || 18;
    const step  = sw + gap;

    ctx.fillStyle = color;

    // Draw diagonal stripes at 45 degrees across the element
    const hyp = Math.sqrt(size.width * size.width + size.height * size.height);
    ctx.save();
    ctx.translate(size.width / 2, size.height / 2);
    ctx.rotate(Math.PI / 4);
    for (let x = -hyp; x < hyp; x += step) {
      ctx.fillRect(x, -hyp, sw, hyp * 2);
    }
    ctx.restore();
  }
});
