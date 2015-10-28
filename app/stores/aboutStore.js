'use strict';

var Reflux = require('reflux');
var AboutActions = require('../actions/aboutActions');
var AboutModel = require('../models/aboutModel');
var ajaxActionDecorator = require('../util/ajaxActionDecorator');

var aboutContent = new AboutModel();
ajaxActionDecorator(aboutContent, AboutActions.LOAD);

var EVENTS = {
  LOADED: 'LOADED'
};

var AboutStore = Reflux.createStore({

    init: function(){

        this.listenToMany(AboutActions);
    },

    onLOADCompleted: function(){

        this.trigger(EVENTS.LOADED);
    },

    onLOAD: function(){

        aboutContent.fetch();
    },

    getContent: function(){

        return aboutContent.get('content');
    }
});

module.exports = AboutStore;