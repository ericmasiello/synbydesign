'use strict';

import Reflux from 'reflux';
import UIActions from '../actions/uiActions';

var initialLoad = true;
var totalRequests = 0;
var loadedRequests = 0;

var resetRequests = function () {

  totalRequests = 0;
  loadedRequests = 0;
};

var loadingStatus = function () {

  this.trigger('CHANGE');

  if (loadedRequests === totalRequests) {
    resetRequests.apply(this);
  }
};

export default Reflux.createStore({

  init() {

    this.listenToMany(UIActions);
  },

  onLOAD() {

    totalRequests++;
    //console.log('making request');
    loadingStatus.call(this);
  },

  onCOMPLETED_LOADING() {

    loadedRequests++;
    //console.log('loaded request');
    loadingStatus.call(this);
  },

  onAPP_LOADED() {

    initialLoad = false;
  },

  isLoading() {

    return ( totalRequests > loadedRequests );
  },

  getLoadingPercentageComplete() {

    return ( loadedRequests / totalRequests );
  },

  isInitialLoad() {

    return initialLoad;
  }
});