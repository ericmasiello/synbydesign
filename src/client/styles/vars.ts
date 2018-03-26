import * as tinyColor from 'tinycolor2';

export const scaler = 1.6;
const unitToPx = (unit: number): number => unit * 16;
const highlight = '#c90044';
const borderColor = '#d4cfd1';

export const COLORS = {
  base: '#424141',
  muted: '#787575',
  highlight,
  link: tinyColor(highlight)
    .setAlpha(0.6)
    .toRgbString(),
  logo: '#3b3b3b',
  galleryBorder: tinyColor(borderColor)
    .setAlpha(0.5)
    .toRgbString(),
  galleryBorderHighlight: borderColor,
  galleryBg: '#e0dcde',
};

export const TYPE_SIZE: TypeMap = {
  small: [unitToPx(0.75), scaler],
  base: [unitToPx(1), scaler],
  t5: [unitToPx(1.3), scaler],
  t4: [unitToPx(1.5), scaler],
  t3: [unitToPx(2), 1.3],
  t2: [unitToPx(2.5), 1.2],
  t1: [unitToPx(3), 1.1],
  jumbo: [unitToPx(4), 1.1],
};

// type properties
export const HEADER_WEIGHTS = {
  medium: 400,
  bold: 700,
};

export const BODY_WEIGHTS = {
  light: 300,
  medium: 400,
  bold: 600,
};

export const GALLERY = Object.freeze({
  itemPadding: 16,
  minItemSize: 300,
  fullSize: 800,
});

export const MEDIA_QUERIES = Object.freeze({
  large: 850,
  xlarge: 1000,
});

// spacing and sizing
export const maxWidth = 1600;
export const horizontalPadding = 40;
export const pageBorderWidth = '1vmin';
export const headerSpacing = '1.5vh';

// page/component values
export const HERO = Object.freeze({
  typeOffset: TYPE_SIZE.jumbo[0] * 0.8,
});
