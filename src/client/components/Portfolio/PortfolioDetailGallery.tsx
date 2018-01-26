import * as React from 'react';
import styled from 'styled-components';
import { getGalleryImages } from '../../utils/portfolioImage';
import { pageContainer, borderedImage } from '../../styles/extensions';
import { pxToRem } from '../../styles/utils';

interface PortfolioDetailGalleryGridProps {
  className?: string;
  grid?: string[];
}

const PortfolioDetailGalleryGrid: React.SFC<PortfolioDetailGalleryGridProps> = props => (
  <ul className={props.className}>{props.children}</ul>
);

PortfolioDetailGalleryGrid.displayName = 'Portfolio.DetailGallery.Grid';

const gapSize = 20;

const composeGrid = (grid: string[], gapSize = 20): string => {
  return grid.reduce(
    (acc, item) => {
      const partialGap = gapSize / grid.length;
      return `${acc} calc(${item} - ${pxToRem(partialGap)})`.trim();
    },
    '',
  );
};

const StyledPortfolioDetailGalleryGrid = styled(PortfolioDetailGalleryGrid)`
  display: grid;
  grid-template-columns: ${(props) => {
    if (props.grid) {
      return composeGrid(props.grid, gapSize);
    }
    return `repeat(2, calc(50% - ${pxToRem(gapSize)}))`;
  }};
  grid-auto-flow: dense;
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-gap: ${pxToRem(gapSize)};
`;

const PortfolioDetailGalleryGridItem = styled.li`
  img {
    ${borderedImage}
    width: 100%;
  }
`;
PortfolioDetailGalleryGridItem.displayName = 'Portfolio.DetailGallery.GridItem';

interface PortfolioDetailGalleryProps {
  className?: string;
  portfolio: Portfolio;
}

export const PortfolioDetailGallery: React.SFC<PortfolioDetailGalleryProps> = (props) => {
  const galleryImagesPaths = getGalleryImages(props.portfolio.imagePaths);
  const meta = props.portfolio.meta;
  return (
    <article className={props.className}>
      <StyledPortfolioDetailGalleryGrid grid={meta && meta.detail && meta.detail.grid}>
        {galleryImagesPaths.map(path => (
          <PortfolioDetailGalleryGridItem key={path.originalUrl}>
            <picture>
              <source srcSet={path.originalUrl} media={`(min-width: ${pxToRem(700)})`} />
              <source srcSet={path.largeUrl} media={`(min-width: ${pxToRem(450)})`} />
              <source srcSet={path.mediumUrl} media={`(min-width: ${pxToRem(200)})`} />
              <img src={path.thumbUrl} alt={path.description || path.title} />
            </picture>
          </PortfolioDetailGalleryGridItem>
        ))}
      </StyledPortfolioDetailGalleryGrid>
    </article>
  );
};

PortfolioDetailGallery.displayName = 'Portfolio.DetailGallery';

const StyledPortfolioDetailGallery = styled(PortfolioDetailGallery)`
  ${pageContainer}
  margin: auto;
`;

export default StyledPortfolioDetailGallery;
