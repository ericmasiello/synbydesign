export const pxToRem = (value: number, base = 16): string => {
  return `${value / base}rem`;
};
