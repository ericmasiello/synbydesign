var Reflux = require('reflux');
var UIActions = require('../actions/uiActions');

var _loadingRequests = 0;

var loadingStatus = function(){

  this.trigger( _loadingRequests > 0 );
};

var UIStore = Reflux.createStore({

  init: function(){

    this.listenTo(UIActions.load, 'load');
    this.listenTo(UIActions.completedLoading, 'completeLoading');
  },

  load: function(){

    _loadingRequests++;
    console.log('making request');
    loadingStatus.call(this);
  },

  completeLoading: function(){

    _loadingRequests--;
    console.log('closing request');
    loadingStatus.call(this);
  }
});

module.exports = UIStore;