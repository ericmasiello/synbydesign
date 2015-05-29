'use strict';

var Reflux = require('reflux');
var UIActions = require('../actions/uiActions');

var totalRequests = 0;
var loadedRequests = 0;

var resetRequests = function(){

  totalRequests = 0;
  loadedRequests = 0;
};

var loadingStatus = function(){

  this.trigger('CHANGE');

  if( loadedRequests === totalRequests ){
    resetRequests.apply(this);
  }
};

var UIStore = Reflux.createStore({

  init: function(){

    this.listenToMany(UIActions);
  },

  onLOAD: function(){

    totalRequests++;
    //console.log('making request');
    loadingStatus.call(this);
  },

  onCOMPLETED_LOADING: function(){

    loadedRequests++;
    //console.log('loaded request');
    loadingStatus.call(this);
  },

  isLoading: function(){

    return ( totalRequests > loadedRequests );
  },

  getLoadingPercentageComplete: function(){

    return ( loadedRequests / totalRequests );
  }
});

module.exports = UIStore;