import { LOADED_ALL_PORTFOLIO } from '../actions/types';

export default (state = false, action = {}) => {

  switch(action.type){
  case LOADED_ALL_PORTFOLIO:
    return true;
  }

  return state;
};