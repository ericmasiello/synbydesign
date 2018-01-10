import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import { pxToRem } from '../styles/utils';
import { maxWidth, horizontalPadding } from '../styles/vars';

const HeaderBackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

HeaderBackgroundImage.displayName = 'Header.BackgroundImage';

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem ${pxToRem(horizontalPadding)};

  @media(min-width: ${pxToRem(850)}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

HeaderContent.displayName = 'Header.Content';


interface Props {
  className?: string;
  imagePath?: string;
}

export const Header: React.SFC<Props> = ({ className, imagePath }) => {
  return (
    <header
      className={className}
      style={{
        minHeight: imagePath ? pxToRem(600) : 0,
      }}
    >
      {imagePath && <HeaderBackgroundImage src={imagePath} alt="" />}
      <HeaderContent
        style={{
          backgroundColor: imagePath ? 'rgba(255, 255, 255, 0.65)' : 'transparent',
        }}
      >
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
  position: relative;
  max-width: ${pxToRem(maxWidth)};
  margin: auto;
  overflow: hidden;
`;
