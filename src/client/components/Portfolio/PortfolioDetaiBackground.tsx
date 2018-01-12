import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';

interface Props {
  className?: string;
  imagePath?: string;
  featuredStyles?: FeaturedStyles;
}

const height = 600;

const defaultStyles: FeaturedStyles = {
  filter: 'blur(1px) grayscale(70%) opacity(0.7)',
  backgroundPosition: '50%',
  applyGradient: true,
};

export const PortfolioDetailBackground: React.SFC<Props> = (props) => {
  if (props.imagePath) {
    return <div className={props.className} />;
  }
  return null;
};

PortfolioDetailBackground.defaultProps = {
  imagePath: 'none',
  featuredStyles: defaultStyles,
};

PortfolioDetailBackground.displayName = 'Portfolio.DetailBackground';

const StyledPortfolioDetailBackground = styled(PortfolioDetailBackground)`
  ${(props) => {
    const featuredStyles = Object.assign({}, defaultStyles, props.featuredStyles);
    return `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${pxToRem(height)};
      z-index: 1;
      background-image: url('${props.imagePath}');
      background-size: cover;
      background-position: ${featuredStyles!.backgroundPosition!};
      filter: ${featuredStyles!.filter!};
      ${featuredStyles.applyGradient ? `
        &::after {
          content: '';
          position: absolute;
          z-index: 2;
          bottom: 0;
          width: 100%;
          height: ${pxToRem(200)};
          background: linear-gradient(to bottom, transparent 0%, #fff 100%);
        }
      ` : ''}
    `;
  }}
`;

export default StyledPortfolioDetailBackground;
