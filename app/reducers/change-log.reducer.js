'use strict';
import { LOAD_CHANGE_LOG } from '../actions/types';

export default (state = [], action = {}) => {

  switch(action.type){
    case LOAD_CHANGE_LOG:
      console.log('!!!!! CHANGE LOG', action);
      return action.payload.data;
  }

  return state;
};
