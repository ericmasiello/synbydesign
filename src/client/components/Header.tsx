import * as React from 'react';
import styled from 'styled-components';
import HeaderContent from './HeaderContent';
import { headerSpacing } from '../styles/vars';

export interface Props extends React.HTMLProps<HTMLElement> {
  className?: string;
}

export const Header: React.SFC<Props> = props => {
  const { className, children, ...rest } = props;
  return (
    <header className={className} {...rest}>
      <HeaderContent>{children}</HeaderContent>
    </header>
  );
};

Header.displayName = 'Header';

export default styled(Header)`
  background-color: rgba(255, 255, 255, 0.9);
  margin-top: ${headerSpacing};
  margin-bottom: ${headerSpacing};
`;
