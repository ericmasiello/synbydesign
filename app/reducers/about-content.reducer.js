import { LOAD_ABOUT_CONTENT } from '../actions/types';
import Immutable from 'immutable';

export default (state = null, action = {}) => {
  'use strict';

  switch(action.type){
    case LOAD_ABOUT_CONTENT:
      return Immutable.fromJS(action.payload.data);
  }

  return state;
};
