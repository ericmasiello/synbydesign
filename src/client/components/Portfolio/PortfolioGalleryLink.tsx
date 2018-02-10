import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { pxToRem } from '../../styles/utils';
import { GALLERY } from '../../styles/vars';

interface Props {
  featured?: boolean;
  to: string;
}

export const PortfolioGalleryLink: React.SFC<Props> = (props) => {
  const { featured, ...rest } = props;
  return <Link {...rest} />;
};

PortfolioGalleryLink.displayName = 'PortfolioGallery.Link';

export default styled(PortfolioGalleryLink)`
  position: relative;
  overflow: hidden;
  border: 10px solid #d4cfd1;
  border-radius: 3px;
  background-color: #e0dcde;
  width: 100%;
  min-height: ${pxToRem(GALLERY.minItemSize)};
  ${props => props.featured ? `
  @media(min-width: ${pxToRem(GALLERY.fullSize)}) {
    height: 100%;
  }
  ` : ''}
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.035);
  }
`;
