import { LOAD_ABOUT_CONTENT } from '../actions/types';

export default (state = null, action = {}) => {
  'use strict';

  switch(action.type){
    case LOAD_ABOUT_CONTENT:
      return action.payload.data;
  }

  return state;
};