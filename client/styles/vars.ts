// import * as tinyColor from 'tinycolor2';

// export const scaler = 1.6;
// const unitToPx = (unit: number): number => unit * 16;
// const highlight = '#c90044';
// const borderColor = '#d4cfd1';

// export const COLORS = {
//   bg: '#fff',
//   base: '#424141',
//   muted: '#787575',
//   highlight,
//   link: tinyColor(highlight)
//     .setAlpha(0.6)
//     .toRgbString(),
//   logo: '#3b3b3b',
//   galleryBorder: tinyColor(borderColor)
//     .setAlpha(0.5)
//     .toRgbString(),
//   galleryBorderHighlight: borderColor,
//   galleryBg: '#e0dcde',
// };

// export const TYPE_SIZE: TypeMap = {
//   small: [unitToPx(0.75), scaler],
//   base: [unitToPx(1), scaler],
//   t5: [unitToPx(1.3), scaler],
//   t4: [unitToPx(1.5), scaler],
//   t3: [unitToPx(2), 1.3],
//   t2: [unitToPx(2.5), 1.2],
//   t1: [unitToPx(3), 1.1],
//   jumbo: [unitToPx(4), 1.1],
// };

// // type properties
// export const HEADER_WEIGHTS = {
//   medium: 400,
//   bold: 700,
// };

// export const BODY_WEIGHTS = {
//   light: 300,
//   medium: 400,
//   bold: 600,
// };

// export const PAGE = Object.freeze({
//   bottomPadding: 30,
// });

// export const GALLERY = Object.freeze({
//   itemPadding: 16,
//   minItemSize: 300,
//   fullSize: 800,
// });

// export const MEDIA_QUERIES = Object.freeze({
//   large: 850,
//   xlarge: 1000,
// });

// // spacing and sizing
// export const maxWidth = 1600;
// export const horizontalPadding = 40;
// export const pageBorderWidth = '1vmin';
// export const headerSpacing = '1.5vh';

// // page/component values
// export const HERO = Object.freeze({
//   typeOffset: TYPE_SIZE.jumbo[0] * 0.8,
// });

// const getNumericWeights = (weights: { [x: string]: number }): string => {
//   return Object.keys(weights)
//     .map(key => weights[key])
//     .join(',');
// };

// export const FONT_URL = `https://fonts.googleapis.com/css?family=Lato:${getNumericWeights(
//   HEADER_WEIGHTS,
// )}|Source+Sans+Pro:${getNumericWeights(BODY_WEIGHTS)}`;

// export const FONT_FILES = [
//   'https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2', // 600
//   'https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2', // 400
//   'https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2', // 300
//   'https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2', // 700
//   'https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXiWtFCc.woff2', // 400
// ];
