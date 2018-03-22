import { pxToRem } from './utils';
import { baseFont, headerFont } from './mixins';
import { COLORS, bodyWeight } from './vars';

/* tslint:disable max-line-length */
export default `
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Source+Sans+Pro:300,400');

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    ${baseFont()}
    color: ${COLORS.base};
    font-size: 100%;
  }

  body {
    margin: 0;
    font-size: ${pxToRem(14)};
    line-height: 1.35;
    font-weight: ${bodyWeight};

    @media only screen and (min-width: 992px) {
      font-size: ${pxToRem(15)};
    }

    @media only screen and (min-width: 1200px) {
      font-size: ${pxToRem(16)};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    ${headerFont()}
    font-weight: 400;
    line-height: 1.1;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: ${COLORS.link};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  img {
    vertical-align: middle;
    border: 0;
  }
`;
/* tslint:enable max-line-length */
