import * as React from 'react';
import styled from 'styled-components';
import PortfolioItemSVG from './PortfolioItemSVG';
import PortfolioItemStackImage from './PortfolioItemStackImage';
import PortfolioItemImage from './PortfolioItemImage';

interface Props {
  className?: string;
  title: string;
  description?: string;
  meta?: PortfolioMeta;
  category: string[];
  tags: string[];
  svgSource?: string;
  imagePaths: ImagePaths;
}

const getImagePath = (imagePaths: ImagePaths): ImagePath | undefined => {
  if (imagePaths.large) {
    return imagePaths.large;
  }
  if (imagePaths.full) {
    return imagePaths.full;
  }
  if (imagePaths.medium) {
    return imagePaths.medium;
  }
};

const Item: React.SFC<Props> = (props) => {
  if (props.meta && props.meta.isSVG && props.svgSource) {
    return (
      <PortfolioItemSVG
        className={props.className}
        svgSource={props.svgSource}
      />
    );
  }

  const preferredImagePath = getImagePath(props.imagePaths);

  if (preferredImagePath) {
    return (
      <PortfolioItemImage
        className={props.className}
        imagePath={preferredImagePath.url}
        width={preferredImagePath.width}
        height={preferredImagePath.height}
      />
    );
  }

  return null;
};

export default styled(Item)`

`;

