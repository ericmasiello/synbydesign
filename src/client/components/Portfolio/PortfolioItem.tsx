import * as React from 'react';
import PortfolioItemSVG from './PortfolioItemSVG';
import PortfolioItemStackImage from './PortfolioItemStackImage';
import PortfolioItemImage from './PortfolioItemImage';

interface Props extends Portfolio {}

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
    return <PortfolioItemSVG svgSource={props.svgSource} />;
  }

  const preferredImagePath = getImagePath(props.imagePaths);

  if (props.meta && props.meta.stackDesign && preferredImagePath) {
    return (
      <PortfolioItemStackImage
        imagePath={preferredImagePath.url}
        width={preferredImagePath.width}
        height={preferredImagePath.height}
      />
    );
  }

  if (preferredImagePath) {
    return (
      <PortfolioItemImage
        imagePath={preferredImagePath.url}
        width={preferredImagePath.width}
        height={preferredImagePath.height}
      />
    );
  }

  return null;
};

export default Item;

