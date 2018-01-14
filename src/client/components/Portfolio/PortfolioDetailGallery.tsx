import * as React from 'react';
import styled from 'styled-components';
import { getGalleryImages } from '../../utils/portfolioImage';
import { pageContainer } from '../../styles/extensions';

interface PortfolioDetailGalleryGridProps {
  className?: string;
  imageCount: number;
}

const PortfolioDetailGalleryGrid: React.SFC<PortfolioDetailGalleryGridProps> = props => (
  <ul className={props.className}>{props.children}</ul>
);

PortfolioDetailGalleryGrid.displayName = 'Portfolio.DetailGallery.Grid';

const StyledPortfolioDetailGalleryGrid = styled(PortfolioDetailGalleryGrid)`
  display: grid;
  grid-template-columns: repeat(${props => `${props.imageCount}, ${100 / props.imageCount}%`});
  grid-auto-flow: dense;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const PortfolioDetailGalleryGridItem = styled.li``;
PortfolioDetailGalleryGridItem.displayName = 'Portfolio.DetailGallery.GridItem';

interface PortfolioDetailGalleryProps {
  className?: string;
  portfolio: Portfolio;
}

export const PortfolioDetailGallery: React.SFC<PortfolioDetailGalleryProps> = (props) => {
  const galleryImagesPaths = getGalleryImages(props.portfolio.imagePaths);
  return (
    <article className={props.className}>
      <StyledPortfolioDetailGalleryGrid imageCount={galleryImagesPaths.length}>
        {galleryImagesPaths.map(path => (
          <PortfolioDetailGalleryGridItem key={path.originalUrl}>
            <img src={path.mediumUrl} alt={path.description || path.title} />
          </PortfolioDetailGalleryGridItem>
        ))}
      </StyledPortfolioDetailGalleryGrid>
    </article>
  );
};

PortfolioDetailGallery.displayName = 'Portfolio.DetailGallery';

const StyledPortfolioDetailGallery = styled(PortfolioDetailGallery)`
  ${pageContainer}
`;

export default StyledPortfolioDetailGallery;
