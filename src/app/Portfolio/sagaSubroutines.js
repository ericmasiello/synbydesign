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
  Syn$Portfolio,
  Syn$Action,
} from '../../../types';
import Api from '../api';

export function* fetchPortfolio(): Generator<Syn$Action, void, Syn$Portfolio[]> {
  try {
    const portfolio: Syn$Portfolio[] = yield call(Api.fetchPortfolio);
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

export function* fetchPortfolioDetail(
  action: Syn$Action,
): Generator<Syn$Action, void, Syn$Portfolio> {
  try {
    const portfolioDetail: Syn$Portfolio = yield call(Api.fetchPortfolioById, action.payload);
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
