/* @flow */
import {
  call,
  put,
} from 'redux-saga/effects';
import {
  LOAD_PORTFOLIO_SUCCEEDED,
  LOAD_PORTFOLIO_FAILED,
} from './actions';
import type {
  Portfolio,
  Action,
} from '../../../types';
import Api from '../api';

// worker Saga: will be fired on LOAD_PORTFOLIO actions
function* fetchPortfolio(): Generator<Action, void, Portfolio> {
  try {
    const portfolio = yield call(Api.fetchPortfolio);
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
export default fetchPortfolio;
