import styled from 'styled-components';
import * as tinyColor from 'tinycolor2';
import { COLORS } from '../../styles/vars';

interface WithAnimatedOptions {
  borderColor?: string;
  linkColor?: string;
  hoverLinkColor?: string;
}

const withAnimatedLink = ({
  borderColor = '#e2f8f2',
  linkColor = COLORS.link,
  hoverLinkColor = tinyColor(COLORS.link).darken(10).toRgbString(),
}: WithAnimatedOptions = {}) => {
  const AnimatedLink = styled.a`
    position: relative;
    color: ${linkColor};
    text-decoration: none;
    transition: color ease 0.3s;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 1px;
      left: 0;
      bottom: -3px;
      background-color: ${borderColor};
      transition: all ease 0.3s;
    }

    &:hover {
      color: ${hoverLinkColor};

      &::after {
        height: 25%;
      }
    }
  `;

  AnimatedLink.displayName = 'AnimatedLink';

  return AnimatedLink;
};

export default withAnimatedLink;
