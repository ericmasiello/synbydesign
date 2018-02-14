import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styles/vars';
import { shadow } from '../../styles/extensions';

interface Props {
  to: string;
}

export const PortfolioGalleryLink: React.SFC<Props> = (props) => {
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
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: scale(1.035);
    border: 10px solid ${COLORS.galleryBorderHighlight};
    z-index: 9999;
  }
`;
