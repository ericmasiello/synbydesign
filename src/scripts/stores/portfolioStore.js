var Reflux = require('reflux');
var PortfolioActions = require('../actions/portfolioActions');
var UIActions = require('../actions/uiActions');
var jQuery = require('jquery');
var WebPortfolioCollection = require('../collections/webPortfolioCollection');
var OtherPortfolioCollection = require('../collections/otherPortfolioCollection');

var _webPortfolio = new WebPortfolioCollection();
var _otherPortfolio = new OtherPortfolioCollection();

var TYPES = {
  other: 'other',
  web: 'web'
};

var PortfolioStore = Reflux.createStore({

  init: function () {
    this.listenTo(PortfolioActions.loadWeb, 'onLoadWeb');
    this.listenTo(PortfolioActions.loadWeb.completed, 'onLoadWebCompleted');
    this.listenTo(PortfolioActions.loadOther, 'onLoadOther');
    this.listenTo(PortfolioActions.loadOther.completed, 'onLoadOtherCompleted');
  },

  onLoadOtherCompleted: function (items) {

    _otherPortfolio.add(items);
    this.trigger(TYPES.other);
  },

  onLoadOther: function () {

    _otherPortfolio.fetch();
  },


  onLoadWebCompleted: function (items) {

    _webPortfolio.add(items);
    this.trigger(TYPES.web);
  },

  onLoadWeb: function () {

    _webPortfolio.fetch();
  },

  getCollectionByName: function(name){

    switch( name ){

      case TYPES.web:

        return _webPortfolio.toJSON();

      case TYPES.other:

        return _otherPortfolio.toJSON();
    }
  }
});

module.exports = PortfolioStore;