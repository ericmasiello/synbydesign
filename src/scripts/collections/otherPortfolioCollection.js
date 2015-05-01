var Backbone = require('backbone');
var PortfolioModel = require('../models/portfolioModel');

var OtherPorfolioCollection = Backbone.Collection.extend({
  url: './wp/wp-json/posts/?filter[category_name]=other',
  model: PortfolioModel
});

module.exports = OtherPorfolioCollection;