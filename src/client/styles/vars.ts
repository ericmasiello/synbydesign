import * as tinyColor from 'tinycolor2';

const highlight = '#c90044';

export const maxWidth = 1200;
export const horizontalPadding = 40;

export const COLORS = {
  base: '#424141',
  muted: '#787575',
  highlight,
  link: tinyColor(highlight).setAlpha(.6).toRgbString(),
  logo: '#3b3b3b',
};

export const TYPE_SIZE: TypeMap = {
  jumbo: [60, 1.1],
};
