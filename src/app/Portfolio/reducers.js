/* @flow */
import {
  LOAD_PORTFOLIO,
  SELECT_PORTFOLIO_ID,
} from './actions';
import type {
  Portfolio,
  PortfolioAction,
  SelectedPortfolioAction,
} from '../../../types';

const defaultPortfolioAction = {
  type: LOAD_PORTFOLIO,
  payload: [],
};

const defaultSelectedPortfolioAction = {
  type: SELECT_PORTFOLIO_ID,
  payload: null,
};

export function portfolioReducer(
  state: Portfolio[] = [],
  action: PortfolioAction = defaultPortfolioAction) {
  switch (action.type) {
    case LOAD_PORTFOLIO:
      return action.payload;
    default:
      return state;
  }
}

export function selectedPortfolioIdReducer(
  state: ?string = null,
  action: SelectedPortfolioAction = defaultSelectedPortfolioAction) {
  switch (action.type) {
    case SELECT_PORTFOLIO_ID:
      return action.payload;
    default:
      return state;
  }
}
