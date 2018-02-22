import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import HeaderContent from './HeaderContent';
import { headerSpacing } from '../styles/vars';

interface Props {
  className?: string;
}

export const Header: React.SFC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <HeaderContent>
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
      </HeaderContent>
    </header>
  );
};

Header.displayName = 'Header';

export default styled(Header)`
  background-color: rgba(255, 255, 255, 0.9);
  margin-top: ${headerSpacing};
  margin-bottom: ${headerSpacing};
`;
