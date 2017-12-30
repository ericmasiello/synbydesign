import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  imagePath: string;
  featured?: boolean;
  size?: string;
  position?: string;
}

const PortfolioItemImage: React.SFC<Props> = props => (
  <div className={props.className} />
);

PortfolioItemImage.displayName = 'PortfolioItemImage';

const StyledPortfoioItemImage = styled(PortfolioItemImage)`
  overflow: hidden;
  background-image: ${props => `url('${props.imagePath}')`};
  background-position: ${props => !props.featured ? `${props.position}` : 'center'};
  width: 100%;
  height: 100%;
  background-size: ${(props) => {
    if (props.size) {
      return props.size;
    }
    return props.featured ? 'cover' : '90%';
  }};
  filter: ${props => !props.featured ? `grayscale(0.85)` : 'grayscale(0.65)'};
  transition: filter 0.2s, transform 0.2s;
  ${props => props.featured ? 'transform: scale(1.05);' : ''};

  &:hover {
    filter: grayscale(0);
    transform: scale(1);
  }
`;

StyledPortfoioItemImage.defaultProps = {
  position: '-20% -30%',
};

export default StyledPortfoioItemImage;
