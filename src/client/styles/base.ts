import { pxToRem } from './utils';
import { baseFont, headerFont } from './mixins';
import { COLORS, BODY_WEIGHTS, HEADER_WEIGHTS, FONT_URL } from './vars';

/* tslint:disable max-line-length */
export default `
@import url('${FONT_URL}');

  html {
    box-sizing: border-box;
    background-color: ${COLORS.bg};
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    ${baseFont()};
    color: ${COLORS.base};
    font-size: 100%;
  }

  body {
    margin: 0;
    font-size: ${pxToRem(14)};
    line-height: 1.35;
    font-weight: ${BODY_WEIGHTS.light};

    @media only screen and (min-width: 992px) {
      font-size: ${pxToRem(15)};
    }

    @media only screen and (min-width: 1200px) {
      font-size: ${pxToRem(16)};
    }
  }

  input, textarea, select, button {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
  }

  input[type=button],
  input[type=submit],
  input[type=reset],
  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    ${headerFont()};
    font-weight: ${HEADER_WEIGHTS.medium};
    line-height: 1.1;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
    margin-bottom: 1rem;
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
