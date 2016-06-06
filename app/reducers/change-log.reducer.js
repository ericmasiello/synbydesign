'use strict';
import { LOAD_CHANGE_LOG } from '../actions/types';
import Immutable from 'immutable';

export default (state = Immutable.List([]), action = {}) => {

  switch(action.type){
    case LOAD_CHANGE_LOG:
      return Immutable.fromJS(action.payload.data);
  }

  return state;
};
