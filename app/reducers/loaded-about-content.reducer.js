'use strict';
import { LOAD_ABOUT_CONTENT } from '../actions/types';

export default (state = false, action = {}) => {

  switch(action.type){
    case LOAD_ABOUT_CONTENT:
      return true;
    }

  return state;
};
