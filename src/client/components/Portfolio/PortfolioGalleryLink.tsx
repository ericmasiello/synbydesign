import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
}

export const PortfolioGalleryLink: React.SFC<Props> = (props) => {
  return <Link {...props} />;
};

PortfolioGalleryLink.displayName = 'PortfolioGallery.Link';

export default styled(PortfolioGalleryLink)`
  display: block;
  overflow: hidden;
  height: 100%;
  border: 10px solid #d4cfd1;
  border-radius: 3px;
  background-color: #e0dcde;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.035);
  }
`;
