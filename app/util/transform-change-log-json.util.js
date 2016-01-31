export default (changeLogList) => {
  'use strict';
  if (!changeLogList || typeof changeLogList !== 'object' || changeLogList.length === 0) {
    return changeLogList;
  }

  return changeLogList.map((item) => {

    return {
      ID: item.ID,
      title: item.title,
      slug: item.slug,
      sticky: item.sticky,
      htmlContent: item.content,
      htmlExcerpt: item.excerpt,
      modifiedDate: item.modified_gmt
    };
  });
};