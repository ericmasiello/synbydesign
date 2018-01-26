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

export const borderedImage = `
  border: ${pxToRem(20)} solid #fff;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;
