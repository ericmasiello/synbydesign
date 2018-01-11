import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import { pxToRem } from '../styles/utils';
import { maxWidth, horizontalPadding } from '../styles/vars';

const showBGImageMediaQuery = pxToRem(500);

interface HeaderContentProps {
  className?: string;
  highlight?: boolean;
}

const HeaderContent: React.SFC<HeaderContentProps> = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

const StyledHeaderContent = styled(HeaderContent)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem ${pxToRem(horizontalPadding)};
  background-color: ${props => props.highlight ? 'rgba(255, 255, 255, 0.65)' : 'transparent'};

  @media(min-width: ${pxToRem(850)}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

HeaderContent.displayName = 'Header.Content';


interface HeaderProps {
  className?: string;
  imagePath?: string;
}

export const Header: React.SFC<HeaderProps> = ({ className, imagePath }) => {
  return (
    <header
      className={className}
    >
      <StyledHeaderContent highlight={!!imagePath}>
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
      </StyledHeaderContent>
      <div className="bg" />
    </header>
  );
};

Header.displayName = 'Header';

export default styled(Header)`
  position: relative;
  max-width: ${pxToRem(maxWidth)};
  margin: auto;
  min-height: ${(props => props.imagePath ? pxToRem(600) : '0')};

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    ${/* TODO: only apply filter when you want the header in certain cases */ ``}
    ${/* filter: blur(3px) grayscale(40%); */ ``}

    @media (min-width: ${showBGImageMediaQuery}) {
      background-image: ${props => props.imagePath ? `url('${props.imagePath}')` : 'none'};
      background-size: cover;
      background-position: 50%;
    }
  }
`;
