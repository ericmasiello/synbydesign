import * as React from 'react';
import { getImagePath, showSVG } from '../../utils/portfolioImage';
import PortfolioItemSVG from './PortfolioItemSVG';
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

const Detail: React.SFC<Props> = (props) => {
  if (showSVG(props)) {
    return (
      <PortfolioItemSVG
        className={props.className}
        svgSource={props.svgSource!}
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

export default Detail;
