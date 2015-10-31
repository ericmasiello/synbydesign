'use strict';

var Backbone = require('backbone');
Backbone.$ = require('jquery');
var PortfolioModel = require('../models/portfolioModel');

var PortfolioCollection = Backbone.Collection.extend({
  url: '../wp/wp-json/posts/?filter[category_name]=web,other,logos,illustration,flyers,business-cards',
  model: PortfolioModel,

  getFilteredCollectionByCategory: function(type){

    if(type === 'design'){

      type = ['logos', 'illustration', 'flyers', 'business-cards'];

    } else {

      type = [type];
    }

    var filtered = this.filter(function(portfolioItem) {

      return (portfolioItem.get('terms').category && portfolioItem.get('terms').category.length > 0 ) ? (type.indexOf(portfolioItem.get('terms').category[0].slug) > -1) : false;
    });

    return new PortfolioCollection(filtered);
  },

  /**
   *
   * @param id
   * @returns {*}
   */
  getModelById: function(id){

    if(typeof id === 'string' ){
      id = parseInt(id);
    }

    var matchingModel = this.filter(function(portfolioItem) {

      return portfolioItem.get('ID') === id;
    });

    if( matchingModel.length === 1 ){

      return matchingModel[0];

    } else {

      return null;
    }
  }
});

module.exports = PortfolioCollection;