import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  items: Portfolio[];
}

const PortfolioGallery: React.SFC<Props> = (props) => {
  return (
    <div>
      The gallery
      {props.items.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

PortfolioGallery.displayName = 'PortfolioGallery';

export default styled(PortfolioGallery)``;
