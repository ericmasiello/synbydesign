import { scaler } from './vars';

export const pxToRem = (value: number, base = 16): string => {
  return `${value / base}rem`;
};

export const scaleToRem = (scale: number = 1): string => `${scaler * scale}rem`;
