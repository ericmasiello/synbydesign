import * as React from 'react';
import styled from 'styled-components';
import Item from './Portfolio/PortfolioItem';
import { Link } from 'react-router-dom';
import { pxToRem } from '../styles/utils';
import { maxWidth, horizontalPadding } from '../styles/vars';

const itemPadding = 16;

interface PortfolioGalleryProps {
  className?: string;
  items: Portfolio[];
}

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

Grid.displayName = 'PortfolioGallery.Grid';

const GridItem = styled.li`
  display: flex;
  padding: ${pxToRem(itemPadding)};
`;

GridItem.displayName = 'PortfolioGallery.GridItem';

const GridLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  max-width: 300px;
  max-height: 205px;
  overflow: hidden;
  border: 10px solid #d4cfd1;
  border-radius: 3px;
  background-color: #e0dcde;
  width: 30rem;
  height: 20.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.035);
  }
`;

GridLink.displayName = 'PortfolioGallery.GridLink';

const PortfolioGallery: React.SFC<PortfolioGalleryProps> = ((props) => {
  return (
    <Grid className={props.className}>
      {props.items.map(item => (
        <GridItem key={item.id}>
          <GridLink to={`/portfolio/${item.id}`}>
            <Item {...item} />
          </GridLink>
        </GridItem>
      ))}
    </Grid>
  );
});

PortfolioGallery.displayName = 'PortfolioGallery';

PortfolioGallery.defaultProps = {
  items: [],
};

export default styled(PortfolioGallery)`
  max-width: ${pxToRem(maxWidth)};
  padding: 0 ${pxToRem(horizontalPadding - itemPadding)};
  margin: 0 auto;
`;
