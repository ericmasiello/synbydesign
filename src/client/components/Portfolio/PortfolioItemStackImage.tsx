import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  imagePath: string;
  width?: number;
  height?: number;
}

const Image = styled.img`
  max-width: 200px;
  position: relative;
  z-index: 3;

  &:not(:first-child) {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(2deg);
    z-index: 2;
  }

  &:nth-child(3) {
    transform: rotate(3deg);
    z-index: 1;
  }
`;

Image.displayName = 'PortfolioItemStackImage.Image';

const PortfolioItemStackImage: React.SFC<Props> = (props) => {
  return (
    <div className={props.className}>
      <Image src={props.imagePath} />
      <Image src={props.imagePath} />
      <Image src={props.imagePath} />
    </div>
  );
};

PortfolioItemStackImage.displayName = 'PortfolioItemStackImage';

export default styled(PortfolioItemStackImage)`
  position: relative;
`;
