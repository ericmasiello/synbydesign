import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import { pxToRem } from '../styles/utils';
import { maxWidth, horizontalPadding } from '../styles/vars';

interface HeaderContentProps {
  className?: string;
}

const HeaderContent: React.SFC<HeaderContentProps> = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

const StyledHeaderContent = styled(HeaderContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem ${pxToRem(horizontalPadding)};
  background-color: rgba(255, 255, 255, 0.90);

  @media(min-width: ${pxToRem(850)}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

HeaderContent.displayName = 'Header.Content';


interface HeaderProps {
  className?: string;
}

export const Header: React.SFC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={className}
    >
      <StyledHeaderContent>
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
      </StyledHeaderContent>
    </header>
  );
};

Header.displayName = 'Header';

// TODO: can HeaderContent and Header be one thing now?

export default styled(Header)`
  max-width: ${pxToRem(maxWidth)};
  margin: auto;
`;
