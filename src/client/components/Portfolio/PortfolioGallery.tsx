import * as React from 'react';
import styled from 'styled-components';
import Item from './PortfolioItem';
import { Link } from 'react-router-dom';
import { pxToRem } from '../../styles/utils';
import { maxWidth, horizontalPadding } from '../../styles/vars';

const itemPadding = 16;
const gridItemSize = 300;
const gridFullSize = 800;

interface PortfolioGalleryProps {
  className?: string;
  items: Portfolio[];
}

const Grid = styled.ul`
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(auto-fit, minmax(${pxToRem(gridItemSize)}, 1fr));
  grid-auto-flow: dense;
`;

Grid.displayName = 'PortfolioGallery.Grid';

interface GridItemsProps {
  className?: string;
  featured?: boolean;
}

const GridItem: React.SFC<GridItemsProps> = props => (
  <li className={props.className}>{props.children}</li>
);

GridItem.displayName = 'PortfolioGallery.GridItem';

const StyledGridItem = styled(GridItem)`
  display: flex;
  padding: ${pxToRem(itemPadding)};
  ${(props) => {
    return props.featured ? `
      @media(min-width: ${pxToRem(gridFullSize)}) {
        grid-column: auto / span 2;
        grid-row: auto / span 2;
      }
    ` : '';
  }}
`;

interface GridLinkProps {
  className?: string;
  featured?: boolean;
  to: string;
}

const GridLink: React.SFC<GridLinkProps> = props => (
  <Link
    className={props.className}
    to={props.to}
  >
    {props.children}
  </Link>
);

GridLink.displayName = 'PortfolioGallery.GridLink';

const StyledGridLink = styled(GridLink)`
  position: relative;
  overflow: hidden;
  border: 10px solid #d4cfd1;
  border-radius: 3px;
  background-color: #e0dcde;
  width: 100%;
  min-height: ${pxToRem(gridItemSize)};
  ${props => props.featured ? `
  @media(min-width: ${pxToRem(gridFullSize)}) {
    height: 100%;
  }
  ` : ''}
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.035);
  }
`;

const PortfolioGallery: React.SFC<PortfolioGalleryProps> = ((props) => {
  return (
    <Grid className={props.className}>
      {props.items.map(item => (
        <StyledGridItem key={item.id} featured={item.featured}>
          <StyledGridLink to={`/portfolio/${item.id}`} featured={item.featured}>
            <Item {...item} />
          </StyledGridLink>
        </StyledGridItem>
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
