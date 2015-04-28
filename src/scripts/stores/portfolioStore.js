var Reflux = require('reflux');
var PortfolioActions = require('../actions/portfolioActions');
var UIActions = require('../actions/uiActions');
var jQuery = require('jquery');
var WebPortfolioCollection = require('../collections/webPortfolioCollection');
var OtherPortfolioCollection = require('../collections/otherPortfolioCollection');
var AjaxMixin = require('../backboneMixins/ajax');

var _webPortfolio = new WebPortfolioCollection();
var _otherPortfolio = new OtherPortfolioCollection();

/*
 * Mixin Ajax sync functionality that plays with the Flux actions
 */
jQuery.extend(_webPortfolio, AjaxMixin, {
  action: PortfolioActions.loadWeb
});

jQuery.extend(_otherPortfolio, AjaxMixin, {
  action: PortfolioActions.loadOther
});

var TYPES = {
  OTHER: 'OTHER',
  WEB: 'WEB'
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
    this.trigger(TYPES.OTHER);
  },

  onLoadOther: function () {

    _otherPortfolio.fetch();
  },


  onLoadWebCompleted: function (items) {

    _webPortfolio.add(items);
    this.trigger(TYPES.WEB);
  },

  onLoadWeb: function () {

    _webPortfolio.fetch();
  },

  getCollectionByName: function(name){

    switch( name ){

      case TYPES.WEB:

        return _webPortfolio.toJSON();

      case TYPES.OTHER:

        return _otherPortfolio.toJSON();
    }
  }
});

module.exports = PortfolioStore;