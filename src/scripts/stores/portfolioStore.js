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

var _TYPES = {
    OTHER: 'OTHER',
    WEB: 'WEB'
};

var _LOADED_TYPES = {
    OTHER: false,
    WEB: false
};

var PortfolioStore = Reflux.createStore({

    init: function () {
        this.listenTo(PortfolioActions.loadWeb, 'onLoadWeb');
        this.listenTo(PortfolioActions.loadWeb.completed, 'onLoadWebCompleted');
        this.listenTo(PortfolioActions.loadOther, 'onLoadOther');
        this.listenTo(PortfolioActions.loadOther.completed, 'onLoadOtherCompleted');
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

    getItem: function () {

        //FIXME
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