var Reflux = require('reflux');
var PortfolioActions = require('../actions/portfolioActions');
var UIActions = require('../actions/uiActions');
var $ = require('jquery');
var PortfolioModel = require('../models/portfolioModel');
var PortfolioCollection = require('../collections/portfolioCollection');
var CollectionAjaxActionDecorator = require('../backboneMixins/collectionAjaxActionDecorator');
//var BackboneModelAjaxMixin = require('../backboneMixins/backboneModelAjaxMixin');

debugger;

var originalFetch = PortfolioModel.prototype.fetch;

$.extend(PortfolioModel.prototype, {
    fetch: function(){

        this.trigger('fetch');
        originalFetch.apply(this);
    }
});

var _portfolio = new PortfolioCollection();
CollectionAjaxActionDecorator(_portfolio, PortfolioActions.LOAD_ALL);



/*
 * Mixin Ajax sync functionality that plays with the Flux actions
 */
//$.extend(_portfolio, BackboneCollectionAjaxMixin, {
//    action: PortfolioActions.LOAD_ALL
//});

var _TYPES = {
    ALL: 'ALL',
    SINGLE: 'SINGLE'
};

var _LOADED_TYPES = {
    ALL: false,
    SINGLE: false
};

var PortfolioStore = Reflux.createStore({

    init: function () {
        this.listenToMany(PortfolioActions);
    },

    onLOAD_SINGLECompleted: function(data){

        _portfolio.add(data);
        this.trigger(_TYPES.SINGLE);
    },

    onLOAD_SINGLE: function(id){

        var portfolioItem = new PortfolioModel({
            id: parseInt(id)
        });

        //$.extend(portfolioItem, BackboneModelAjaxMixin, {
        //    action: PortfolioActions.LOAD_SINGLE
        //});

        portfolioItem.on('fetch', function(){

            console.log('fetching a single item');
        });

        portfolioItem.on('sync', function(){

            debugger;
            console.log('synced a single item');
        });

        portfolioItem.fetch();
    },

    onLOAD_ALLCompleted: function (items) {

        _LOADED_TYPES.ALL = true;
        this.trigger(_TYPES.ALL);
    },

    onLOAD_ALL: function () {

        debugger;


        _portfolio.on('sync', function(data){

            PortfolioActions.LOAD_ALL.completed();
        });

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

        return ( _LOADED_TYPES.ALL );
    },

    hasLoadedItemById: function(id){

        var model = _portfolio.getModelById(id);
        return ( model === null ) ? false : true;
    }
});

module.exports = PortfolioStore;