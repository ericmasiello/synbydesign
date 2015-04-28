var Reflux = require('reflux');
var UIActions = require('../actions/uiActions');

var _loadingRequests = 0;

var loadingStatus = function(){

  this.trigger('CHANGE');
};

var UIStore = Reflux.createStore({

  init: function(){

    this.listenTo(UIActions.load, 'onLoad');
    this.listenTo(UIActions.completedLoading, 'onCompleteLoading');
  },

  onLoad: function(){

    _loadingRequests++;
    console.log('making request');
    loadingStatus.call(this);
  },

  onCompleteLoading: function(){

    _loadingRequests--;
    console.log('closing request');
    loadingStatus.call(this);
  },

  isLoading: function(){

    return ( _loadingRequests > 0 );
  }
});

module.exports = UIStore;