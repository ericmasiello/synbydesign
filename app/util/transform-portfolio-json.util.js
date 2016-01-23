import { DESIGN_CATEGORIES, OTHER_CATEGORIES, WEB_CATEGORIES, MIX_CATEGORIES } from '../configuration/';

const categoryReducerPartial = (types) => {
  return (previous, cat) => {
    return ( previous || types.includes(cat.slug) == true)
  }
};

const addMetaData = (portfolioItem, meta) => {
  return Object.assign(portfolioItem, (meta ? {
    meta: {
      showLiveSite: portfolioItem.isWebsite && typeof meta.website_url === 'string' && meta.website_url.length > 0 ? true : false,
      liveSiteUrl: meta.website_url
    }
  } : {}));
};

export default (portfolioList) => {
  if (!portfolioList || typeof portfolioList !== 'object' || portfolioList.length === 0) {
    return portfolioList;
  }

  const isWebsiteReducer = categoryReducerPartial(WEB_CATEGORIES);
  const isDesignReducer = categoryReducerPartial(DESIGN_CATEGORIES);
  const isOtherReducer = categoryReducerPartial(OTHER_CATEGORIES);
  const isMixReducer = categoryReducerPartial(MIX_CATEGORIES);

  return portfolioList.map((item) => {

    return addMetaData({
      ID: item.ID,
      title: item.title,
      content: item.content,
      slug: item.slug,
      sticky: item.sticky,
      featuredImage: item.featured_image.guid,
      skills: item.terms.post_tag ? item.terms.post_tag.map(tag => tag.name) : [],
      isWebsite: item.terms.category.reduce(isWebsiteReducer, false),
      isDesign: item.terms.category.reduce(isDesignReducer, false),
      isOther: item.terms.category.reduce(isOtherReducer, false),
      isMix: item.terms.category.reduce(isMixReducer, false)
    }, item.custom_meta);
  });
}