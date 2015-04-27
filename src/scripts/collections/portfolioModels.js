var Backbone = require('backbone');
var PortfolioModel = require('../models/portfolioModel');

var PortfolioModels = Backbone.Collection.extend({
  model: PortfolioModel
});

module.exports = PortfolioModels;