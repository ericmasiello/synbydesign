import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import { pxToRem } from '../styles/utils';
import { maxWidth, horizontalPadding } from '../styles/vars';

const HeaderBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  filter: grayscale(.85);
  transform: translateY(-50%);
`;

HeaderBackgroundImage.displayName = 'Header.BackgroundImage';

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    <header className={className}>
      {imagePath && <HeaderBackgroundImage src={imagePath} alt="" />}
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
  position: relative;
  padding: 1rem ${pxToRem(horizontalPadding)};
  max-width: ${pxToRem(maxWidth)};
  margin: auto;
  overflow: hidden;
`;
