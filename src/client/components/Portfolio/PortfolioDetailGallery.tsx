import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';
import { getGalleryImages } from '../../utils/portfolioImage';

const Title = styled.h1``;
const Description = styled.div``;

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
  margin: ${pxToRem(480)} 0 0;
  padding: 0;
`;

const PortfolioDetailGalleryGridItem = styled.li``;
PortfolioDetailGalleryGridItem.displayName = 'Portfolio.DetailGallery.GridItem';

const PortfolioDetailGalleryHeader = styled.hgroup`
  max-width: 50rem;
`;
PortfolioDetailGalleryHeader.displayName = 'Portfolio.DetailGallery.Header';

interface PortfolioDetailGalleryProps {
  className?: string;
  portfolio: Portfolio;
}

export const PortfolioDetailGallery: React.SFC<PortfolioDetailGalleryProps> = (props) => {
  const galleryImagesPaths = getGalleryImages(props.portfolio.imagePaths);
  const { title, description = '' } = props.portfolio;
  return (
    <article className={props.className}>
      <PortfolioDetailGalleryHeader>
        <Title>{props.portfolio.title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </PortfolioDetailGalleryHeader>
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
`;

export default StyledPortfolioDetailGallery;
