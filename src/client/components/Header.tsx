import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import { pxToRem } from '../styles/utils';
import { maxWidth, horizontalPadding } from '../styles/vars';

interface Props {
  className?: string;
}

export const Header: React.SFC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </header>
  );
};

Header.displayName = 'Header';

export default styled(Header)`
  padding: 1rem ${pxToRem(horizontalPadding)};
  max-width: ${pxToRem(maxWidth)};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: ${pxToRem(850)}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
