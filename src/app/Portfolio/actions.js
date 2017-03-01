/* @flow */
import type {
  LoadPortfolioAction,
  SelectedPortfolioAction,
  LoadPortfolioActionType,
  SelectPortfolioIdActionType,
} from '../../../types';

export const LOAD_PORTFOLIO: LoadPortfolioActionType = 'LOAD_PORTFOLIO';
export const LOAD_PORTFOLIO_SUCCEEDED: string = 'LOAD_PORTFOLIO_SUCCEEDED';
export const LOAD_PORTFOLIO_FAILED: string = 'LOAD_PORTFOLIO_FAILED';
export const SELECT_PORTFOLIO_ID: SelectPortfolioIdActionType = 'SELECT_PORTFOLIO_ID';

export function loadPortfolio(): LoadPortfolioAction {
  return {
    type: LOAD_PORTFOLIO,
  };
}

export function selectedPortfolioById(id: string): SelectedPortfolioAction {
  return {
    type: SELECT_PORTFOLIO_ID,
    payload: id,
  };
}
