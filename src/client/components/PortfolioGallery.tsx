import * as React from 'react';
import styled from 'styled-components';
import Item from './Portfolio/PortfolioItem';

interface PortfolioGalleryProps {
  className?: string;
  items: Portfolio[];
}

const PortfolioGallery: React.SFC<PortfolioGalleryProps> = ((props) => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
});

PortfolioGallery.displayName = 'PortfolioGallery';

export default styled(PortfolioGallery)``;
