import * as React from 'react';
import styled from 'styled-components';
import { getGalleryImages } from '../../utils/portfolioImage';
import { pageContainer } from '../../styles/extensions';
import { pxToRem } from '../../styles/utils';

interface PortfolioDetailGalleryGridProps {
  className?: string;
  imageCount: number;
}

const PortfolioDetailGalleryGrid: React.SFC<PortfolioDetailGalleryGridProps> = props => (
  <ul className={props.className}>{props.children}</ul>
);

PortfolioDetailGalleryGrid.displayName = 'Portfolio.DetailGallery.Grid';

const gapSize = pxToRem(20);

const StyledPortfolioDetailGalleryGrid = styled(PortfolioDetailGalleryGrid)`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - ${gapSize}));
  grid-auto-flow: dense;
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-gap: ${gapSize};
`;

const getGalleryImageUrlByTotalCount = (totalGalleryItems: number) =>
  (imagePath: PortfolioImage): string => {
    if (totalGalleryItems > 2 && imagePath.mediumUrl) {
      return imagePath.mediumUrl;
    }

    return imagePath.originalUrl;
  };


const PortfolioDetailGalleryGridItem = styled.li`
  img {
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
  const getGalleryImage = getGalleryImageUrlByTotalCount(galleryImagesPaths.length);
  return (
    <article className={props.className}>
      <StyledPortfolioDetailGalleryGrid imageCount={galleryImagesPaths.length}>
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
