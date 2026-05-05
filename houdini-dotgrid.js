/**
 * Houdini CSS Paint Worklet — Dot Grid
 * Registers a "dot-grid" painter that draws an animated dot-grid pattern.
 * Controlled via CSS custom properties:
 *   --dot-color   : color of dots (default #ffffff)
 *   --dot-spacing : gap between dots in px (default 24)
 *   --dot-radius  : radius of each dot in px (default 2)
 *   --dot-opacity : opacity 0–1 (default 0.25)
 */
registerPaint('dot-grid', class {
  static get inputProperties() {
    return [
      '--dot-color',
      '--dot-spacing',
      '--dot-radius',
      '--dot-opacity',
    ];
  }

  paint(ctx, size, props) {
    const color   = props.get('--dot-color').toString().trim()   || '#ffffff';
    const spacing = parseFloat(props.get('--dot-spacing'))       || 24;
    const radius  = parseFloat(props.get('--dot-radius'))        || 2;
    const opacity = parseFloat(props.get('--dot-opacity'))       || 0.25;

    ctx.globalAlpha = opacity;
    ctx.fillStyle   = color;

    for (let x = spacing / 2; x < size.width; x += spacing) {
      for (let y = spacing / 2; y < size.height; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
});
