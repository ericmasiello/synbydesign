import * as React from 'react';
import PortfolioItemSVG from './PortfolioItemSVG';
import PortfolioItemImage from './PortfolioItemImage';
import { getImagePath, showSVG } from '../../utils/portfolioImage';

interface Props {
  className?: string;
  title: string;
  description?: string;
  meta?: PortfolioMeta;
  category: string[];
  tags: string[];
  svgSource?: string;
  imagePaths: PortfolioImage[];
}

const Item: React.SFC<Props> = props => {
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
        imagePath={preferredImagePath}
        fit={props.meta && props.meta.thumb && props.meta.thumb.fit}
        alt={props.title}
        position={props.meta && props.meta.thumb && props.meta.thumb.position}
      />
    );
  }

  return null;
};

export default Item;
