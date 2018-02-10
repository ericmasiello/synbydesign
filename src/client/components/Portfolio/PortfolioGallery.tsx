import * as React from 'react';
import styled from 'styled-components';
import Item from './PortfolioItem';
import { Link } from 'react-router-dom';
import { pxToRem } from '../../styles/utils';
import { maxWidth, horizontalPadding, GALLERY } from '../../styles/vars';
import GalleryItem from './PortfolioGalleryItem';

interface PortfolioGalleryProps {
  className?: string;
  items: Portfolio[];
}

const Grid = styled.ul`
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(auto-fit, minmax(${pxToRem(GALLERY.minItemSize)}, 1fr));
  grid-auto-flow: dense;
`;

Grid.displayName = 'PortfolioGallery.Grid';

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
  min-height: ${pxToRem(GALLERY.minItemSize)};
  ${props => props.featured ? `
  @media(min-width: ${pxToRem(GALLERY.fullSize)}) {
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
        <GalleryItem key={item.id} featured={item.featured}>
          <StyledGridLink to={`/portfolio/${item.id}`} featured={item.featured}>
            <Item {...item} />
          </StyledGridLink>
        </GalleryItem>
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
  padding: 0 ${pxToRem(horizontalPadding - GALLERY.itemPadding)};
  margin: 0 auto;
`;
