export function mergePortfolioDataWithCoverImage(images) {
  return (portfolioData) => {
    const imageSrc = portfolioData?.frontmatter?.coverImage?.src;
    // find image in images list
    const image = imageSrc && images[binarySearch(imageSrc, images, (imageNode) => imageNode?.fluid?.originalName)];

    if (!image) {
      return portfolioData;
    }

    return {
      ...portfolioData,
      frontmatter: {
        ...portfolioData.frontmatter,
        coverImage: {
          ...portfolioData.frontmatter.coverImage,
          fluid: image.fluid,
        },
      },
    };
  };
}

export function mergePortfolioListWithCoverImage(portfolioDataList, images) {
  return portfolioDataList.map(mergePortfolioDataWithCoverImage(images));
}

function binarySearch(value, list, getValue) {
  let first = 0; //left endpoint
  let last = list.length - 1; //right endpoint
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (getValue(list[middle]) === value) {
      found = true;
      position = middle;
    } else if (getValue(list[middle]) > value) {
      //if in lower half
      last = middle - 1;
    } else {
      //in in upper half
      first = middle + 1;
    }
  }
  return position;
}

export function attributedImage(image, imageMetaData) {
  if (!image || !imageMetaData || image.fluid.originalName !== imageMetaData.src) {
    return null;
  }
  return {
    ...image,
    ...imageMetaData,
  };
}

export function mapMetaToImageData(imageNodes) {
  return (imageMetaData) => {
    const matchingImage = imageMetaData && imageNodes.find((image) => image.fluid.originalName === imageMetaData.src);
    return attributedImage(matchingImage, imageMetaData);
  };
}

export function getImageByUsage(usage) {
  return (attributedImages) => {
    return attributedImages.find((image) => {
      return image?.meta?.usage?.indexOf(usage) > -1;
    });
  };
}
