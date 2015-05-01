var Reflux = require('reflux');
var PortfolioActions = require('../actions/portfolioActions');
var UIActions = require('../actions/uiActions');
var jQuery = require('jquery');
var PortfolioModel = require('../models/portfolioModel');
var PortfolioCollection = require('../collections/portfolioCollection');
var BackboneCollectionAjaxMixin = require('../backboneMixins/backboneCollectionAjaxMixin');
var BackboneModelAjaxMixin = require('../backboneMixins/backboneModelAjaxMixin');

var _portfolio = new PortfolioCollection();

/*
 * Mixin Ajax sync functionality that plays with the Flux actions
 */
jQuery.extend(_portfolio, BackboneCollectionAjaxMixin, {
    action: PortfolioActions.LOAD_ALL
});

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
            ID: id
        });

        jQuery.extend(portfolioItem, BackboneModelAjaxMixin, {
            action: PortfolioActions.LOAD_SINGLE
        });

        portfolioItem.fetch();
    },

    onLOAD_ALLCompleted: function (items) {

        _LOADED_TYPES.ALL = true;
        _portfolio.reset([]); //clears out anything that's in there
        _portfolio.add(items); //readds them
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

        return ( _LOADED_TYPES.ALL );
    },

    hasLoadedItemById: function(id){

        var model = _portfolio.getModelById(id);
        return ( model === null ) ? false : true;
    }
});

module.exports = PortfolioStore;