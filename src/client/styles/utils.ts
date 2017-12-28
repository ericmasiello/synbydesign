export const pxToRem = (value: number | string, base = 16): string => {
  if (typeof value === 'string') {
    return `${parseFloat(value.replace(/[^0-9.]/g, '')) / base}rem`;
  }

  return `${(value / base)}rem`;
};

export const type = (typeDef: TypeSize): string => {
  return `
    font-size: ${pxToRem(typeDef[0])};
    line-height: ${typeDef[1]};
  `;
};

export const baseFont = () => `font-family: 'Source Sans Pro', sans-serif;`;
export const headerFont = () => `font-family: 'Lato', sans-serif;`;
