var Backbone = require('backbone');
Backbone.$ = require('jquery');
var PortfolioModel = require('../models/portfolioModel');

var PortfolioCollection = Backbone.Collection.extend({
  url: './wp/wp-json/posts/?filter[category_name]=web,other',
  model: PortfolioModel,
  //initialize: function(){
  //
  //  this.on('request', function(){
  //    console.log('Collection: request');
  //  });
  //
  //  this.on('sync', function(){
  //    console.log('Collection: sync');
  //  });
  //
  //  this.on('error', function(){
  //    console.log('Collection: error');
  //  });
  //},
  getFilteredCollectionByCategory: function(type){

    var filtered = this.filter(function(portfolioItem) {

      return (portfolioItem.get('terms').category && portfolioItem.get('terms').category.length > 0 ) ? portfolioItem.get('terms').category[0].slug === type : false;
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

      return matchingModel[0]

    } else {

      return null;
    }
  }
});

module.exports = PortfolioCollection;