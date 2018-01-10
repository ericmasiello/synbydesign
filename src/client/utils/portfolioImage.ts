export const getImagePath = (imagePaths: PortfolioImage[], featured = false): string | undefined => {
  const path: PortfolioImage | undefined = imagePaths[0];

  if (!path) {
    return;
  }

  if (featured && path.largeUrl) {
    return path.largeUrl;
  }
  if (featured && path.originalUrl) {
    return path.originalUrl;
  }
  if (path.mediumUrl) {
    return path.mediumUrl;
  }
};

interface Props {
  meta?: {
    isSVG?: boolean;
  };
  svgSource?: string;
}

export const showSVG = ({ meta = {}, svgSource }: Props = {}) => {
  return !!(meta.isSVG && svgSource);
};
