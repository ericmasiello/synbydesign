var Reflux = require('reflux');
var AboutActions = require('../actions/aboutActions');
var AboutModel = require('../models/aboutModel');
var ajaxActionDecorator = require('../util/ajaxActionDecorator');

var _aboutContent = new AboutModel();
ajaxActionDecorator(_aboutContent, AboutActions.LOAD);

var _EVENTS = {
  LOADED: 'LOADED'
};

var AboutStore = Reflux.createStore({

    init: function(){

        this.listenToMany(AboutActions)
    },

    onLOADCompleted: function(){

        this.trigger(_EVENTS.LOADED);
    },

    onLOAD: function(){

        _aboutContent.fetch();
    },

    getContent: function(){

        return _aboutContent.get('content');
    }
});

module.exports = AboutStore;