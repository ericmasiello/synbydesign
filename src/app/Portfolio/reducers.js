/* @flow */
import { LOAD_PORTFOLIO } from './actions';
import type { Portfolio, PortfolioAction } from '../../../types';

const defaultAction = {
  type: '',
  payload: [],
};

export default function portfolioReducer(
  state: Portfolio[] = [],
  action: PortfolioAction = defaultAction) {
  switch (action.type) {
    case LOAD_PORTFOLIO:
      return action.payload;
    default:
      return state;
  }
}
