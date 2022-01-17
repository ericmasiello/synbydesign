import { createStitches } from '@stitches/react';

const stitches = createStitches({
  prefix: 'synbydesign',
  theme: {
    colors: {
      bg: '#fff',
      base: '#424141',
      brand: '#c90044',
      brandInvert: '#36ffbb',
      highlight: '#5f2058',
      link: 'rgba(201, 0, 68, 0.8)',
      logo: '#3b3b3b',
      galleryBorder: 'rgba(212, 207, 209, 0.5)',
      galleryBorderHighlight: '#d4cfd1',
      galleryBg: '#e0dcde',
    },
  },
});

// const visageStitches = createStitches({
//   prefix: 'design-stack',
//   theme: {
//       colors: sourceColors,
//       spacing: spacingPx,
//   },
//   media: {
//       xs: `(min-width: ${screenClassMinWidths.xs}px)`,
//       sm: `(min-width: ${screenClassMinWidths.sm}px)`,
//       md: `(min-width: ${screenClassMinWidths.md}px)`,
//       lg: `(min-width: ${screenClassMinWidths.lg}px)`,
//   },
// });

export const css = stitches.css;
export const theme = stitches.theme;
export const getCssText = stitches.getCssText;
