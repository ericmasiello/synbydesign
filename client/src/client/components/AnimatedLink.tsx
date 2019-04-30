import * as React from 'react';
import styled from 'styled-components';
import * as tinyColor from 'tinycolor2';
import { COLORS } from '../styles/vars';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  borderColor?: string;
  linkColor?: string;
  hoverLinkColor?: string;
  tag?: Tag;
}

const AnimatedLink: React.SFC<Props> = props => {
  const {
    tag: Tag,
    borderColor,
    linkColor,
    hoverLinkColor,
    ...rest
  } = props as Props;
  // @ts-ignore
  return <Tag {...rest} />;
};

AnimatedLink.displayName = 'AnimatedLink';

AnimatedLink.defaultProps = {
  borderColor: COLORS.link,
  linkColor: COLORS.link,
  hoverLinkColor: tinyColor(COLORS.link)
    .darken(10)
    .toRgbString(),
  tag: 'a',
};

export default styled(AnimatedLink)`
  ${props => {
    const mergedProps = Object.assign({}, AnimatedLink.defaultProps, props);
    return `
      position: relative;
      color: ${mergedProps.linkColor};
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
        background-color: ${mergedProps.borderColor};
        transition: all ease 0.3s;
      }

      &:hover {
        color: ${mergedProps.hoverLinkColor};
        &::after {
          height: 25%;
        }
      }
    `;
  }};
`;
