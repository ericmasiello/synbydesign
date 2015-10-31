'use strict';

import Reflux from 'reflux';
import PortfolioActions from '../actions/portfolioActions';
import PortfolioModel from '../models/portfolioModel';
import PortfolioCollection from '../collections/portfolioCollection';
import ajaxActionDecorator from '../util/ajaxActionDecorator';

var portfolioItem;
var portfolio = new PortfolioCollection();

//adds event hooks to portfolio collection to trigger appropriate Reflux Actions
ajaxActionDecorator(portfolio, PortfolioActions.LOAD_ALL);

var TYPES = {
  ALL: 'ALL',
  SINGLE: 'SINGLE'
};

var LOADED = {
  ALL: false
};

export default Reflux.createStore({

  init() {
    this.listenToMany(PortfolioActions);
  },

  onLOAD_SINGLECompleted() {

    portfolio.add(portfolioItem);
    this.trigger(TYPES.SINGLE);
  },

  onLOAD_SINGLE(id) {

    portfolioItem = new PortfolioModel({
      id: parseInt(id)
    });

    //adds event hooks to portfolioItem model to trigger appropriate Reflux Actions
    ajaxActionDecorator(portfolioItem, PortfolioActions.LOAD_SINGLE);
    portfolioItem.fetch();
  },

  onLOAD_ALLCompleted() {

    LOADED.ALL = true;
    this.trigger(TYPES.ALL);
  },

  onLOAD_ALL() {

    portfolio.fetch();
  },

  getCollectionByCategory(category) {

    return portfolio.getFilteredCollectionByCategory(category).toJSON();
  },

  getItemById(id) {

    var model = portfolio.getModelById(id);
    return (model === null) ? {} : model.toJSON();
  },

  hasLoadedAll() {

    return ( LOADED.ALL );
  },

  hasLoadedItemById(id) {

    var model = portfolio.getModelById(id);
    return ( model === null ) ? false : true;
  }
});