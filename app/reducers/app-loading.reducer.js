import { REQUEST_DATA, RECEIVED_DATA } from '../actions/types';
import Immutable from 'immutable';

export default (state = Immutable.Map({
  activeRequests: 0,
  loadedRequests: 0
}), action = {}) => {

  'use strict';

  switch(action.type) {
    case REQUEST_DATA:
      return Immutable.Map({
        activeRequests: state.get('activeRequests') + 1,
        loadedRequests: state.get('loadedRequests')
      });
    case RECEIVED_DATA:

      /*
       If the incoming request is the final request to be made
       then we can just reset our object to say there are no
       active requests
       */
      if( state.get('activeRequests') === state.get('loadedRequests') + 1 ){
        return Immutable.Map({
          activeRequests: 0,
          loadedRequests: 0
        });
      }

      return Immutable.Map({
        activeRequests: state.get('activeRequests'),
        loadedRequests: state.get('loadedRequests') + 1
      });
  }

  return state;
};
