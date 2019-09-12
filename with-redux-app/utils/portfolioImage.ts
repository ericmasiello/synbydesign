// export const getImagePath = (
//   imagePaths: PortfolioImage | PortfolioImage[],
// ): string | undefined => {
//   let path;
//   if (Array.isArray(imagePaths)) {
//     path = imagePaths[0];
//   } else {
//     path = imagePaths;
//   }

//   if (!path) {
//     return;
//   }

//   if (path.largeUrl) {
//     return path.largeUrl;
//   }
//   if (path.originalUrl) {
//     return path.originalUrl;
//   }
// };

// export const getImagePaths = (imagePaths: PortfolioImage[]): string[] => {
//   const partial = (path: PortfolioImage) => getImagePath(path);
//   return imagePaths.map(partial).filter(path => path !== undefined) as string[];
// };

// export const getGalleryImages = (
//   imagePaths: PortfolioImage[],
// ): PortfolioImage[] => {
//   return imagePaths.filter(path => {
//     if (path.meta && path.meta.usage) {
//       return path.meta.usage.indexOf('gallery') > -1;
//     }

//     // if usage is not defined, assume it goes in the gallery
//     return true;
//   });
// };

// export const getHeroImage = (
//   imagePaths: PortfolioImage[],
// ): PortfolioImage | undefined => {
//   return imagePaths.filter(path => {
//     if (path.meta && path.meta.usage) {
//       return path.meta.usage.indexOf('hero') > -1;
//     }
//     return false;
//   })[0];
// };

// export const getBackgroundImage = (
//   imagePaths: PortfolioImage[],
// ): PortfolioImage | undefined => {
//   const bgImagePath = imagePaths.filter(path => {
//     if (path.meta && path.meta.usage) {
//       return path.meta.usage.indexOf('background') > -1;
//     }
//     return false;
//   })[0];

//   if (bgImagePath) {
//     return bgImagePath;
//   }

//   // Default behavior is use the first image
//   return imagePaths[0];
// };

// interface Props {
//   meta?: {
//     isSVG?: boolean;
//   };
//   svgSource?: string;
// }

// export const showSVG = ({ meta = {}, svgSource }: Props = {}) => {
//   return !!(meta.isSVG && svgSource);
// };
