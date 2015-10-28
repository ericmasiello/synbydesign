'use strict';

var Reflux = require('reflux');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioModel = require('../models/portfolioModel');
var PortfolioCollection = require('../collections/portfolioCollection');
var ajaxActionDecorator = require('../util/ajaxActionDecorator');

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

var PortfolioStore = Reflux.createStore({

    init: function () {
        this.listenToMany(PortfolioActions);
    },

    onLOAD_SINGLECompleted: function(){

        portfolio.add(portfolioItem);
        this.trigger(TYPES.SINGLE);
    },

    onLOAD_SINGLE: function(id){

        portfolioItem = new PortfolioModel({
            id: parseInt(id)
        });

        //adds event hooks to portfolioItem model to trigger appropriate Reflux Actions
        ajaxActionDecorator(portfolioItem, PortfolioActions.LOAD_SINGLE);
        portfolioItem.fetch();
    },

    onLOAD_ALLCompleted: function () {

        LOADED.ALL = true;
        this.trigger(TYPES.ALL);
    },

    onLOAD_ALL: function () {

        portfolio.fetch();
    },

    getCollectionByCategory: function (category) {

        return portfolio.getFilteredCollectionByCategory(category).toJSON();
    },

    getItemById: function (id) {

        var model = portfolio.getModelById(id);
        return (model === null) ? {} : model.toJSON();
    },

    hasLoadedAll: function () {

        return ( LOADED.ALL );
    },

    hasLoadedItemById: function(id){

        var model = portfolio.getModelById(id);
        return ( model === null ) ? false : true;
    }
});

module.exports = PortfolioStore;