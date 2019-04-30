import { pxToRem } from './utils';
import { horizontalPadding, maxWidth } from './vars';

export const pageContainer = `
  max-width: ${pxToRem(maxWidth)};
  padding-left: ${pxToRem(horizontalPadding)};
  padding-right: ${pxToRem(horizontalPadding)};
`;

export const visuallyHidden = `
  position: absolute! important;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px,1px,1px,1px);
  padding: 0!important;
  border: 0!important;
  height: 1px!important;
  width: 1px!important;
  overflow: hidden;
`;

// TODO: refactor this into something more sensible
// maybe composeFilters() or something like that
// since it takes a list of filters
export const shadow = (blur = '2px', otherFilters = '') =>
  `filter: drop-shadow(0 0 ${blur} rgba(0, 0, 0, 0.25)) ${otherFilters};`;

export const borderedImage = `
  ${shadow()}
  border: ${pxToRem(20)} solid #fff;
`;

export const type = (typeDef: TypeSize): string => {
  return `
    font-size: ${pxToRem(typeDef[0])};
    line-height: ${typeDef[1]};
  `;
};

export const scalableType = (
  [maxSize, lineHeight]: TypeSize,
  minSize: number = 16,
) => {
  const relativeScaler = 10;
  return `
    font-size: 10vw;
    line-height: ${lineHeight};

    @media(max-width: ${pxToRem(minSize * relativeScaler)}) {
      font-size: ${pxToRem(minSize)};
    }

    @media(min-width: ${pxToRem(maxSize * relativeScaler)}) {
      font-size: ${pxToRem(maxSize)};
    }
  `;
};

export const baseFont = () => `font-family: 'Source Sans Pro', sans-serif;`;
export const headerFont = () => `font-family: 'Lato', sans-serif;`;
