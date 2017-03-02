/* @flow */
import {
  call,
  put,
} from 'redux-saga/effects';
import {
  LOAD_PORTFOLIO_SUCCEEDED,
  LOAD_PORTFOLIO_FAILED,
  LOAD_PORTFOLIO_DETAIL_SUCCEEDED,
  LOAD_PORTFOLIO_DETAIL_FAILED,
} from './actions';
import type {
  Portfolio,
  Action,
} from '../../../types';
import Api from '../api';

// worker Saga: will be fired on LOAD_PORTFOLIO actions
export function* fetchPortfolio(): Generator<Action, void, Portfolio[]> {
  try {
    const portfolio: Portfolio[] = yield call(Api.fetchPortfolio);
    yield put({
      type: LOAD_PORTFOLIO_SUCCEEDED,
      payload: portfolio,
    });
  } catch (e) {
    yield put({
      type: LOAD_PORTFOLIO_FAILED,
      message: e.message,
    });
  }
}

export function* fetchPortfolioDetail(): Generator<Action, void, Portfolio> {
  try {
    const portfolioDetail: Portfolio = yield call(Api.fetchPortfolio);
    yield put({
      type: LOAD_PORTFOLIO_DETAIL_SUCCEEDED,
      payload: portfolioDetail,
    });
  } catch (e) {
    yield put({
      type: LOAD_PORTFOLIO_DETAIL_FAILED,
      message: e.message,
    });
  }
}
