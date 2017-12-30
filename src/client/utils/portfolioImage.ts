export const getImagePath = (imagePaths: ImagePaths): ImagePath | undefined => {
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

interface Props {
  meta?: {
    isSVG?: boolean;
  };
  svgSource?: string;
}

export const showSVG = ({ meta = {}, svgSource }: Props = {}) => {
  return meta && meta.isSVG && svgSource;
};
