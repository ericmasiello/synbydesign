import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  imagePath: string;
  width?: number;
  height?: number;
}

const Image = styled.img`
  width: 100%;
  height: auto;
  filter: grayscale(1);
  transition: filter 0.2s, transform 0.2s;

  &:hover {
    filter: grayscale(0);
  }
`;

Image.displayName = 'PortfolioItemImage.Image';

const PortfolioItemImage: React.SFC<Props> = (props) => {
  return (
    <Image src={props.imagePath} className={props.className} />
  );
};

PortfolioItemImage.displayName = 'PortfolioItemImage';

export default styled(PortfolioItemImage)`
  overflow: hidden;
`;
