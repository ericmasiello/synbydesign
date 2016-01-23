import { DESIGN_CATEGORIES, OTHER_CATEGORIES, WEB_CATEGORIES, MIX_CATEGORIES } from '../configuration/';
import extractor from 'extract-image-props-from-html-string';

const categoryReducerPartial = (types) => {
  'use strict';
  return (previous, cat) => {
    return ( previous || types.includes(cat.slug) == true);
  };
};

const addMetaData = (portfolioItem, meta) => {
  'use strict';
  return Object.assign(portfolioItem, (meta ? {
    meta: {
      showLiveSite: portfolioItem.isWebsite && typeof meta.website_url === 'string' && meta.website_url.length > 0 ? true : false,
      liveSiteUrl: meta.website_url
    }
  } : {}));
};

export default (portfolioList) => {
  'use strict';
  if (!portfolioList || typeof portfolioList !== 'object' || portfolioList.length === 0) {
    return portfolioList;
  }

  const isWebsiteReducer = categoryReducerPartial(WEB_CATEGORIES);
  const isDesignReducer = categoryReducerPartial(DESIGN_CATEGORIES);
  const isOtherReducer = categoryReducerPartial(OTHER_CATEGORIES);
  const isMixReducer = categoryReducerPartial(MIX_CATEGORIES);

  return portfolioList.map((item) => {

    let altText = extractor.getAltText(item.content);
    altText = typeof altText === 'string' && altText.length > 0 ? altText : item.title;

    return addMetaData({
      ID: item.ID,
      title: item.title,
      slug: item.slug,
      sticky: item.sticky,
      featuredImagePath: item.featured_image.guid,
      fullSizeImage: {
        path: extractor.getSource(item.content),
        altText: altText,
        maxWidth: extractor.getWidth(item.content),
        maxHeight: extractor.getHeight(item.content)
      },
      skills: item.terms.post_tag ? item.terms.post_tag.map(tag => tag.name) : [],
      isWebsite: item.terms.category.reduce(isWebsiteReducer, false),
      isDesign: item.terms.category.reduce(isDesignReducer, false),
      isOther: item.terms.category.reduce(isOtherReducer, false),
      isMix: item.terms.category.reduce(isMixReducer, false)
    }, item.custom_meta);
  });
};