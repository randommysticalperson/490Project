/**
 * houdini-init.js
 * ---------------
 * Registers all CSS Houdini Paint Worklets and typed @property custom properties
 * for the 490Project (Beta educational platform).
 *
 * Include this script in every HTML page:
 *   <script src="houdini-init.js"></script>
 *
 * Houdini APIs used:
 *  1. CSS Paint API  (CSS.paintWorklet) — custom painted backgrounds
 *  2. CSS Properties & Values API (CSS.registerProperty) — typed, animatable custom props
 */

(function () {
  'use strict';

  /* ── 1. CSS Paint API ─────────────────────────────────────────────────── */
  if ('paintWorklet' in CSS) {
    // Resolve worklet paths relative to this script's location
    const base = document.currentScript
      ? new URL(document.currentScript.src).href.replace(/[^/]*$/, '')
      : '';

    CSS.paintWorklet.addModule(base + 'houdini-dotgrid.js');
    CSS.paintWorklet.addModule(base + 'houdini-stripes.js');
    CSS.paintWorklet.addModule(base + 'houdini-ripple.js');
  }

  /* ── 2. CSS Properties & Values API ──────────────────────────────────── */
  if ('registerProperty' in CSS) {

    // Brand accent color — animatable
    CSS.registerProperty({
      name: '--brand-hue',
      syntax: '<number>',
      inherits: true,
      initialValue: '330',
    });

    // Dot-grid controls
    CSS.registerProperty({
      name: '--dot-spacing',
      syntax: '<number>',
      inherits: false,
      initialValue: '24',
    });
    CSS.registerProperty({
      name: '--dot-radius',
      syntax: '<number>',
      inherits: false,
      initialValue: '2',
    });
    CSS.registerProperty({
      name: '--dot-opacity',
      syntax: '<number>',
      inherits: false,
      initialValue: '0.25',
    });

    // Stripe controls
    CSS.registerProperty({
      name: '--stripe-width',
      syntax: '<number>',
      inherits: false,
      initialValue: '6',
    });
    CSS.registerProperty({
      name: '--stripe-gap',
      syntax: '<number>',
      inherits: false,
      initialValue: '18',
    });

    // Ripple controls
    CSS.registerProperty({
      name: '--ripple-count',
      syntax: '<integer>',
      inherits: false,
      initialValue: '4',
    });
    CSS.registerProperty({
      name: '--ripple-width',
      syntax: '<number>',
      inherits: false,
      initialValue: '1.5',
    });

    // Card hover lift — animatable length
    CSS.registerProperty({
      name: '--card-lift',
      syntax: '<length>',
      inherits: false,
      initialValue: '0px',
    });

    // Button glow radius — animatable length
    CSS.registerProperty({
      name: '--btn-glow',
      syntax: '<length>',
      inherits: false,
      initialValue: '0px',
    });
  }
})();
