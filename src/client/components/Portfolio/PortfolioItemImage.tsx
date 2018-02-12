import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  imagePath: string;
  fit?: string;
  position?: string;
  alt: string;
}

const PortfolioItemImage: React.SFC<Props> = (props) => {
  const { imagePath, fit, position, ...rest } = props;
  return (
    <img src={imagePath} {...rest} />
  );
};

PortfolioItemImage.displayName = 'PortfolioItemImage';

export default styled(PortfolioItemImage)`
  ${(props) => {
    if (props.position !== undefined) {
      console.log('props', props);
    }
    return '';
  }}
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${props => props.position ? props.position : '50% 0'};
  transform: scale(1.05);
  filter: grayscale(0.65);
  transition: filter 0.2s, transform 0.2s;

  &:hover {
    filter: grayscale(0);
    transform: scale(1);
  }
`;
