'use strict';
import { REQUEST_DATA, RECEIVED_DATA } from '../actions/types';

export default (state = {
  activeRequests: 0,
  loadedRequests: 0
}, action = {}) => {

  switch(action.type) {
    case REQUEST_DATA:
      return {
        activeRequests: state.activeRequests + 1,
        loadedRequests: state.loadedRequests
      }
    case RECEIVED_DATA:

      /*
       If the incoming request is the final request to be made
       then we can just reset our object to say there are no
       active requests
       */
      if( state.activeRequests === state.loadedRequests + 1 ){
        return {
          activeRequests: 0,
          loadedRequests: 0
        };
      }

      return {
        activeRequests: state.activeRequests,
        loadedRequests: state.loadedRequests + 1
      };
  }

  return state;
};
