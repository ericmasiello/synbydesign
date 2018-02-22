import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';
import { borderedImage } from '../../styles/extensions';

interface Props {
  className?: string;
  imagePath: PortfolioImage;
}

export const PortfolioDetailImage: React.SFC<Props> = props => {
  return (
    <article className={props.className}>
      <img src={props.imagePath.originalUrl} alt="FIXME" />
    </article>
  );
};

PortfolioDetailImage.displayName = 'Portfolio.DetailImage';

const StyledPortfolioDetailImage = styled(PortfolioDetailImage)`
  text-align: center;
  margin-top: ${pxToRem(50)};

  img {
    ${borderedImage} margin: auto;
    display: inline-block;
    max-width: 80%;
  }
`;

export default StyledPortfolioDetailImage;
