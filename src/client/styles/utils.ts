export const pxToRem = (value: number, base = 16): string => {
  return `${value / base}rem`;
};

export const type = (typeDef: TypeSize): string => {
  return `
    font-size: ${pxToRem(typeDef[0])};
    line-height: ${typeDef[1]};
  `;
};

export const baseFont = () => `font-family: 'Source Sans Pro', sans-serif;`;
export const headerFont = () => `font-family: 'Lato', sans-serif;`;
