var Reflux = require('reflux');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioModel = require('../models/portfolioModel');
var PortfolioCollection = require('../collections/portfolioCollection');
var ajaxActionDecorator = require('../util/ajaxActionDecorator');

var portfolioItem;
var _portfolio = new PortfolioCollection();

//adds event hooks to _portfolio collection to trigger appropriate Reflux Actions
ajaxActionDecorator(_portfolio, PortfolioActions.LOAD_ALL);

var _TYPES = {
    ALL: 'ALL',
    SINGLE: 'SINGLE'
};

var _LOADED = {
    ALL: false
};

var PortfolioStore = Reflux.createStore({

    init: function () {
        this.listenToMany(PortfolioActions);
    },

    onLOAD_SINGLECompleted: function(){

        _portfolio.add(portfolioItem);
        this.trigger(_TYPES.SINGLE);
    },

    onLOAD_SINGLE: function(id){

        portfolioItem = new PortfolioModel({
            id: parseInt(id)
        });

        //adds event hooks to portfolioItem model to trigger appropriate Reflux Actions
        ajaxActionDecorator(portfolioItem, PortfolioActions.LOAD_SINGLE);
        portfolioItem.fetch();
    },

    onLOAD_ALLCompleted: function (items) {

        _LOADED.ALL = true;
        this.trigger(_TYPES.ALL);
    },

    onLOAD_ALL: function () {

        _portfolio.fetch();
    },

    getCollectionByCategory: function (category) {

        return _portfolio.getFilteredCollectionByCategory(category).toJSON();
    },

    getItemById: function (id) {

        var model = _portfolio.getModelById(id);
        return (model === null) ? {} : model.toJSON();
    },

    hasLoadedAll: function () {

        return ( _LOADED.ALL );
    },

    hasLoadedItemById: function(id){

        var model = _portfolio.getModelById(id);
        return ( model === null ) ? false : true;
    }
});

module.exports = PortfolioStore;