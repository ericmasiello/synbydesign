var Reflux = require('reflux');
var UIActions = require('../actions/uiActions');

var _totalRequests = 0;
var _loadedRequests = 0;

var loadingStatus = function(){

  this.trigger('CHANGE');

  if( _loadedRequests === _totalRequests ){
    resetRequests.apply(this);
  }
};

var resetRequests = function(){

  _totalRequests = 0;
  _loadedRequests = 0;
};

var UIStore = Reflux.createStore({

  init: function(){

    this.listenToMany(UIActions);
  },

  onLOAD: function(){

    _totalRequests++;
    console.log('making request');
    loadingStatus.call(this);
  },

  onCOMPLETED_LOADING: function(){

    _loadedRequests++;
    console.log('loaded request');
    loadingStatus.call(this);
  },

  isLoading: function(){

    return ( _totalRequests > _loadedRequests );
  },

  getLoadingPercentageComplete: function(){

    return ( _loadedRequests / _totalRequests );
  },
});

module.exports = UIStore;