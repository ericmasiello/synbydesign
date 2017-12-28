import { baseFont, headerFont } from './utils';
import { COLORS } from './vars';

/* tslint:disable max-line-length */
export default `
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Source+Sans+Pro:300,400');

  html {
    ${baseFont()}
    color: ${COLORS.base};
    line-height: 1.5;
    font-size: 14px;

    @media only screen and (min-width: 992px) {
      font-size: 15px;
    }

    @media only screen and (min-width: 1200px) {
      font-size: 16px;
    }
  }

  body {
    margin: 0;
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
`;
/* tslint:enable max-line-length */
