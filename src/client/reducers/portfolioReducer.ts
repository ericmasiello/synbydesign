import { Reducer } from 'redux';
import { FETCH_PORTFOLIO_ITEMS, FETCH_PORTFOLIO_DETAIL } from '../actions';

const portfolioReducer: Reducer<Portfolio[]> = (state = [], action) => {
  if (action.type === FETCH_PORTFOLIO_ITEMS && !action.error) {
    return action.payload.data;
  }

  if (action.type === FETCH_PORTFOLIO_DETAIL && !action.error) {
    const newItem = action.payload.data;
    if (!state.find(item => item.id === newItem.id)) {
      return [...state, action.payload.data];
    }
  }
  return state;
};

export default portfolioReducer;
