import * as tinyColor from 'tinycolor2';

const highlight = '#c90044';

export const maxWidth = 1600;
export const horizontalPadding = 40;
export const pageBorderWidth = '1vmin';
export const headerSpacing = '1.5vh';

export const COLORS = {
  base: '#424141',
  muted: '#787575',
  highlight,
  link: tinyColor(highlight).setAlpha(.6).toRgbString(),
  logo: '#3b3b3b',
};

const scaler = 1.6;

const unitToPx = (unit: number): number => unit * 16;

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

export const bodyWeight = 300;
export const mediumWeight = 500;
export const boldWeight = 600;

export const GALLERY = Object.freeze({
  itemPadding: 8,
  minItemSize: 300,
  fullSize: 800,
});
