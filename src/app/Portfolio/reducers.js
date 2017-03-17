/* @flow */
import {
  LOAD_PORTFOLIO,
  LOAD_PORTFOLIO_SUCCEEDED,
  LOAD_PORTFOLIO_DETAIL_SUCCEEDED,
  SELECT_PORTFOLIO_ID,
} from './actions';
import type {
  Syn$Portfolio,
  Syn$Action,
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
  state: Syn$Portfolio[] = [],
  action: Syn$Action = defaultPortfolioAction) {
  switch (action.type) {
    case LOAD_PORTFOLIO_SUCCEEDED:
      return action.payload;
    case LOAD_PORTFOLIO_DETAIL_SUCCEEDED:
      // FIXME: this will need to be refined in the event portfolio list is already hydrated
      // we don't want to just tack on duplicates at the end of the list
      return [...state, action.payload];
    default:
      return state;
  }
}

// FIXME: process should be
/*
  go to detail page
  set the SELECT_PORTFOLIO_ID
  check to see if value comes back,
  if empty, then call the detail action
  then check to see if data comes back
  if not, then there isn't a matching record
  // NOTE: this thing needs to also respond to LOAD_PORTFOLIO_DETAIL_SUCCEEDED type
*/
export function selectedPortfolioIdReducer(
  state: ?string = null,
  action: Syn$Action = defaultSelectedPortfolioAction) {
  switch (action.type) {
    case SELECT_PORTFOLIO_ID:
      return action.payload;
    default:
      return state;
  }
}
