var Backbone = require('backbone');
var PortfolioModel = require('../models/portfolioModel');

var WebPortfolioCollection = Backbone.Collection.extend({
  url: './wp/wp-json/posts/?filter[category_name]=web',
  model: PortfolioModel
});

module.exports = WebPortfolioCollection;