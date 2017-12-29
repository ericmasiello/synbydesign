import { Reducer } from 'redux';
import { FETCH_PORTFOLIO_ITEMS, FETCH_PORTFOLIO_DETAIL } from '../actions';

const portfolioReducer: Reducer<Portfolio[]> = (state = [], action) => {
  if (action.type === FETCH_PORTFOLIO_ITEMS && !action.error) {
    return action.payload.data;
  }

  if (action.type === FETCH_PORTFOLIO_DETAIL && !action.error) {
    return [...state, action.payload.data];
  }
  return state;
};

export default portfolioReducer;
