export const getImagePath = (imagePaths: PortfolioImage | PortfolioImage[], featured = false): string | undefined => {
  let path;
  if (Array.isArray(imagePaths)) {
    path = imagePaths[0];
  } else {
    path = imagePaths;
  }

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

export const getImagePaths = (imagePaths: PortfolioImage[]): string[] => {
  const partial = (path: PortfolioImage) => getImagePath(path, false);
  return imagePaths.map(partial).filter(path => path !== undefined) as string[];
};

export const getGalleryImages = (imagePaths: PortfolioImage[]): PortfolioImage[] => {
  return imagePaths.filter((path) => {
    if (path.meta && path.meta.isExcludedFromGallery) {
      return false;
    }
    return true;
  });
};

export const getBackgroundImage = (imagePaths: PortfolioImage[]): PortfolioImage => {
  const featuredImagePaths = imagePaths.filter((path) => {
    if (path.meta && path.meta.isBackgroundImage) {
      return true;
    }
    return false;
  });

  if (featuredImagePaths.length > 0) {
    return featuredImagePaths[0];
  }

  return imagePaths[0];
};

// export const getHighestPriorityImage = (imagePaths: PortfolioImage[]): PortfolioImage => {
//   // maybe should sort by priority instead of just looking for priority == 1?
//   const topPriority = imagePaths.find(path => path.priority === 1);

//   const path = topPriority || imagePaths[0];

//   return path;
// };

interface Props {
  meta?: {
    isSVG?: boolean;
  };
  svgSource?: string;
}

export const showSVG = ({ meta = {}, svgSource }: Props = {}) => {
  return !!(meta.isSVG && svgSource);
};
