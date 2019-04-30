import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { pxToRem } from '../../styles/utils';
import { COLORS, GALLERY } from '../../styles/vars';
import { shadow } from '../../styles/mixins';

interface Props {
  to: string;
  children: React.ReactNode;
}

export const PortfolioGalleryLink: React.SFC<Props> = props => {
  return <Link {...props} />;
};

PortfolioGalleryLink.displayName = 'PortfolioGallery.Link';

export default styled(PortfolioGalleryLink)`
  ${shadow('1px')};
  position: relative;
  display: block;
  overflow: hidden;
  height: 100%;
  border: 10px solid ${COLORS.galleryBorder};
  border-radius: 3px;
  background-color: ${COLORS.galleryBg};
  transition: transform 0.2s, border-color 0.2s, filter 0.2s;

  @media (min-width: ${pxToRem(GALLERY.minItemSize * 2)}) {
    max-height: ${pxToRem(GALLERY.minItemSize * 1.5)};
  }

  @media (min-width: ${pxToRem(GALLERY.minItemSize * 3)}) {
    max-height: none;
  }

  &:hover {
    transform: scale(1.01);
    border: 10px solid ${COLORS.galleryBorderHighlight};
    ${shadow('1px')};
    z-index: 1000;
  }
`;
