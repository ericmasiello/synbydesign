import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';

interface Props {
  className?: string;
  imagePath?: string;
  ignoreFilters?: boolean;
  featuredStyles?: FeaturedStyles;
}

const height = 600;

export const PortfolioDetailBackground: React.SFC<Props> = (props) => {
  if (props.imagePath) {
    return <div className={props.className} />;
  }
  return null;
};

PortfolioDetailBackground.displayName = 'Portfolio.DetailBackground';

PortfolioDetailBackground.defaultProps = {
  ignoreFilters: false,
};

const StyledPortfolioDetailBackground = styled(PortfolioDetailBackground)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${pxToRem(height)};
  z-index: 1;
  background-image: ${props => props.imagePath ? `url('${props.imagePath}')` : 'none'};
  background-size: cover;
  background-position: ${({ featuredStyles }) => {
    if (featuredStyles && featuredStyles.backgroundPosition) {
      return featuredStyles.backgroundPosition;
    }
    return '50%';
  }};

  ${(props) => {
    if (props.ignoreFilters) {
      return '';
    }
    return `
      filter: blur(1px) grayscale(70%) opacity(0.7);
      &::after {
        content: '';
        position: absolute;
        z-index: 2;
        bottom: 0;
        width: 100%;
        height: ${pxToRem(200)};
        background: linear-gradient(to bottom, transparent 0%, #fff 100%);
      }
    `;
  }}
`;

export default StyledPortfolioDetailBackground;
