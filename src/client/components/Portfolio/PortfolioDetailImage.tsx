import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';

interface Props {
  className?: string;
  imagePath: PortfolioImage;
  featured?: boolean;
  size?: string;
  position?: string;
}

export const PortfolioDetailImage: React.SFC<Props> = (props) => {
  return (
    <article className={props.className}>
      <img src={props.imagePath.originalUrl} alt="FIXME" />
    </article>
  );
};

const StyledPortfolioDetailImage = styled(PortfolioDetailImage)`
  text-align: center;
  margin-top: ${pxToRem(50)};

  img {
    margin: auto;
    display: inline-block;
    border: ${pxToRem(20)} solid #fff;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
    max-width: 80%;
  }
`;

export default StyledPortfolioDetailImage;
