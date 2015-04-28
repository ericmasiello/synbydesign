var Backbone = require('backbone');
//Backbone.$ = require('jquery'); //needed to support .fetch() method
var $ = require('jquery');
var PortfolioModel = require('../models/portfolioModel');
var PortfolioActions = require('../actions/portfolioActions');
var AjaxMixin = require('../backboneMixins/ajax');

var OtherPorfolioCollection = Backbone.Collection.extend({
  url: './wp/wp-json/posts/?filter[category_name]=other',
  action: PortfolioActions.loadOther,
  model: PortfolioModel
});

$.extend(OtherPorfolioCollection.prototype, AjaxMixin);

module.exports = OtherPorfolioCollection;