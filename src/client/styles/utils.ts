export const pxToRem = (value: number, base = 16): string => {
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


/*

html {font-size: 1em;}

body {
  background-color: white;
  font-family: 'Source Sans Pro', serif;
  font-weight: 400;
  line-height: 1.45;
  color: #333;
}

p {margin-bottom: 1.3em;}

h1, h2, h3, h4 {
  margin: 1.414em 0 0.5em;
  font-weight: inherit;
  line-height: 1.2;
}

h1 {
  margin-top: 0;
  font-size: 6.854em;
}

h2 {font-size: 4.236em;}

h3 {font-size: 2.618em;}

h4 {font-size: 1.618em;}

small, .font_small {font-size: 0.618em;}
*/
