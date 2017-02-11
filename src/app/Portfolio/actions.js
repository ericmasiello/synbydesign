/* @flow */
import type {
  PortfolioAction,
  SelectedPortfolioAction,
} from '../../../types';

export const LOAD_PORTFOLIO: string = 'LOAD_PORTFOLIO';
export const SELECT_PORTFOLIO_ID: string = 'SELECT_PORTFOLIO_ID';

export function loadPortfolio(): PortfolioAction {
  return {
    type: LOAD_PORTFOLIO,
    payload: [], // FIXME
  };
}

export function selectedPortfolioById(id: string): SelectedPortfolioAction {
  return {
    type: SELECT_PORTFOLIO_ID,
    payload: id,
  };
}
