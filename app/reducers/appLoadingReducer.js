import { REQUEST_DATA, RECEIVED_DATA } from '../actions/types';

export default (state = {
  activeRequests: 0,
  loadedRequests: 0
}, action) => {

  switch(action.type){
    case REQUEST_DATA:
      return {
        activeRequests: state.activeRequests + 1,
        loadedRequests: state.loadedRequests
      };
    case RECEIVED_DATA:
      return {
        activeRequests: state.activeRequests,
        loadedRequests: state.loadedRequests + 1
      };
    default:
      return state;
  }
};