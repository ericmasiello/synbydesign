var Backbone = require('backbone');
//Backbone.$ = require('jquery'); //needed to support .fetch() method
var $ = require('jquery');
var PortfolioModel = require('../models/portfolioModel');
var PortfolioActions = require('../actions/portfolioActions');
var AjaxMixin = require('../backboneMixins/ajax');

var WebPortfolioCollection = Backbone.Collection.extend({
  url: './wp/wp-json/posts/?filter[category_name]=web',
  action: PortfolioActions.loadWeb,
  model: PortfolioModel
});

$.extend(WebPortfolioCollection.prototype, AjaxMixin);

module.exports = WebPortfolioCollection;