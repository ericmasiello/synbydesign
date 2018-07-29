import * as React from 'react';
import styled from 'styled-components';
import * as tinyColor from 'tinycolor2';
import { COLORS, BODY_WEIGHTS } from '../styles/vars';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  tag?: Tag;
}

interface DefaultProps extends Props {
  tag: Tag;
}

export const Button: React.SFC<Props> = props => {
  const { tag: Tag, ...rest } = props as DefaultProps;

  return <Tag {...rest} />;
};

Button.defaultProps = {
  tag: 'button',
} as DefaultProps;

Button.displayName = 'Button';

const StyledButton = styled(Button)`
  border: 1px solid ${COLORS.base};
  font-weight: ${BODY_WEIGHTS.bold};
  background-color: ${COLORS.bg};
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${tinyColor(COLORS.bg)
      .darken(4)
      .toRgbString()};
  }
`;

export default StyledButton;
