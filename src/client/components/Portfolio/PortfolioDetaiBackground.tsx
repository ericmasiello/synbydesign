import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';

interface Props {
  className?: string;
  imagePath?: string;
  styles?: BackgroundStyles;
}

const height = 600;

const defaultStyles: BackgroundStyles = {
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
  styles: defaultStyles,
};

PortfolioDetailBackground.displayName = 'Portfolio.DetailBackground';

const StyledPortfolioDetailBackground = styled(PortfolioDetailBackground)`
  ${(props) => {
    const styles = Object.assign({}, defaultStyles, props.styles);
    return `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${pxToRem(height)};
      z-index: 1;
      background-image: url('${props.imagePath}');
      background-size: cover;
      background-position: ${styles!.backgroundPosition!};
      filter: ${styles!.filter!};
      ${styles.applyGradient ? `
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
