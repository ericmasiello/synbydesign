'use strict';
import Immutable from 'immutable';

export default (changeLogList) => {
  if (!changeLogList || typeof changeLogList !== 'object' || changeLogList.length === 0) {
    return changeLogList;
  }

  return changeLogList.map((item) => {

    return Immutable.Map({
      ID: item.get('ID'),
      title: item.get('title'),
      slug: item.get('slug'),
      sticky: item.get('sticky'),
      htmlContent: item.get('content'),
      htmlExcerpt: item.get('excerpt'),
      modifiedDate: item.get('modified_gmt')
    });
  });
};
