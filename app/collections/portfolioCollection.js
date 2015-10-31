'use strict';

import Backbone from 'backbone';
Backbone.$ = require('jquery');
import PortfolioModel from '../models/portfolioModel';

var PortfolioCollection =  Backbone.Collection.extend({
  url: '../wp/wp-json/posts/?filter[category_name]=web,other,logos,illustration,flyers,business-cards',
  model: PortfolioModel,

  getFilteredCollectionByCategory(type) {

    if (type === 'design') {

      type = ['logos', 'illustration', 'flyers', 'business-cards'];

    } else {

      type = [type];
    }

    var filtered = this.filter(function (portfolioItem) {

      return (portfolioItem.get('terms').category && portfolioItem.get('terms').category.length > 0 ) ? (type.indexOf(portfolioItem.get('terms').category[0].slug) > -1) : false;
    });

    return new PortfolioCollection(filtered);
  },

  /**
   *
   * @param id
   * @returns {*}
   */
  getModelById(id) {

    if (typeof id === 'string') {
      id = parseInt(id);
    }

    var matchingModel = this.filter(function (portfolioItem) {

      return portfolioItem.get('ID') === id;
    });

    if (matchingModel.length === 1) {

      return matchingModel[0];

    } else {

      return null;
    }
  }
});

export default PortfolioCollection;