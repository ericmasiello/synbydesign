import { LOAD_PORTFOLIO_ALL, LOAD_PORTFOLIO_DETAIL } from '../actions/types';

export default (state = [], action = {}) => {

  switch(action.type){
  case LOAD_PORTFOLIO_ALL:
    return action.payload.data;
  }

  return state;
};