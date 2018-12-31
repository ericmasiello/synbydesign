import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';
import { borderedImage } from '../../styles/mixins';

interface Props {
  className?: string;
  imagePath: PortfolioImage;
}

export const PortfolioDetailImage: React.SFC<Props> = props => {
  return (
    <article className={props.className}>
      <a href={props.imagePath.originalUrl}>
        <img src={props.imagePath.originalUrl} alt={props.imagePath.title} />
      </a>
    </article>
  );
};

PortfolioDetailImage.displayName = 'Portfolio.DetailImage';

const StyledPortfolioDetailImage = styled(PortfolioDetailImage)`
  text-align: center;
  margin-top: ${pxToRem(50)};

  a {
    display: inline-block;
  }

  img {
    ${borderedImage} margin: auto;
    display: inline-block;
    width: 100%;
    max-width: ${pxToRem(1000)};
  }
`;

export default StyledPortfolioDetailImage;
