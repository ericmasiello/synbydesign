import { LOAD_PORTFOLIO_ALL, LOAD_PORTFOLIO_DETAIL } from '../actions/types';

const portfolioReducer = (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_PORTFOLIO_ALL:
      return action.payload.data;
    case LOAD_PORTFOLIO_DETAIL:
      return [action.payload.data];
    default:
      return state;
  }
};

export default portfolioReducer;
