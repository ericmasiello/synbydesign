var Reflux = require('reflux');
var PortfolioActions = require('../actions/portfolioActions');
var UIActions = require('../actions/uiActions');
var jQuery = require('jquery');
var PortfolioModel = require('../models/portfolioModel');
var WebPortfolioCollection = require('../collections/webPortfolioCollection');
var OtherPortfolioCollection = require('../collections/otherPortfolioCollection');
var BackboneCollectionAjaxMixin = require('../backboneMixins/backboneCollectionAjaxMixin');
var BackboneModelAjaxMixin = require('../backboneMixins/backboneModelAjaxMixin');

var _webPortfolio = new WebPortfolioCollection();
var _otherPortfolio = new OtherPortfolioCollection();

/*
 * Mixin Ajax sync functionality that plays with the Flux actions
 */
jQuery.extend(_webPortfolio, BackboneCollectionAjaxMixin, {
    action: PortfolioActions.loadWeb
});

jQuery.extend(_otherPortfolio, BackboneCollectionAjaxMixin, {
    action: PortfolioActions.loadOther
});

var _TYPES = {
    OTHER: 'OTHER',
    WEB: 'WEB',
    SINGLE: 'SINGLE'
};

var _LOADED_TYPES = {
    OTHER: false,
    WEB: false
};

var PortfolioStore = Reflux.createStore({

    init: function () {
        //this.listenTo(PortfolioActions.loadWeb, 'onLoadWeb');
        //this.listenTo(PortfolioActions.loadWeb.completed, 'onLoadWebCompleted');
        //this.listenTo(PortfolioActions.loadOther, 'onLoadOther');
        //this.listenTo(PortfolioActions.loadOther.completed, 'onLoadOtherCompleted');

        this.listenToMany(PortfolioActions);
    },

    onLoadSingleItemCompleted: function(data){


        switch( data.terms.category[0].slug ){

            case 'web':
                _webPortfolio.add(data);
                break;

            case 'other':
                _otherPortfolio.add(data);
                break;
        }
        this.trigger(_TYPES.SINGLE);
        //TODO: read object to figure out which collection to add it to
    },

    onLoadSingleItem: function(id){

        debugger;

        var portfolioItem = new PortfolioModel({
            id: id
        });

        jQuery.extend(portfolioItem, BackboneModelAjaxMixin, {
            action: PortfolioActions.loadSingleItem
        });

        portfolioItem.fetch();
    },

    onLoadOtherCompleted: function (items) {

        _LOADED_TYPES.OTHER = true;
        _otherPortfolio.add(items);
        this.trigger(_TYPES.OTHER);
    },

    onLoadOther: function () {

        _otherPortfolio.fetch();
    },

    onLoadWebCompleted: function (items) {

        _LOADED_TYPES.WEB = true;
        _webPortfolio.add(items);
        this.trigger(_TYPES.WEB);
    },

    onLoadWeb: function () {

        _webPortfolio.fetch();
    },

    getCollectionByName: function (name) {

        switch (name) {

            case _TYPES.WEB:

                return _webPortfolio.toJSON();

            case _TYPES.OTHER:

                return _otherPortfolio.toJSON();
        }
    },

    getItemById: function (id) {

        //FIXME
        debugger;
        return _webPortfolio.toJSON()[0];
    },

    hasLoadedData: function () {

        for (var key in _LOADED_TYPES) {

            if (_LOADED_TYPES[key] === false) {

                return false;
            }
        }

        return true;
    }
});

module.exports = PortfolioStore;