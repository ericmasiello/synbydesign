/* @flow */
import {
  call,
  put,
} from 'redux-saga/effects';
import {
  LOAD_ABOUT_SUCCEEDED,
  LOAD_ABOUT_FAILED,
} from './actions';
import type {
  About,
  Action,
} from '../../../types';
import Api from '../api';

// worker Saga: will be fired on LOAD_ABOUT actions
function* fetchAbout(): Generator<Action, void, About> {
  try {
    const about = yield call(Api.fetchAbout);
    yield put({
      type: LOAD_ABOUT_SUCCEEDED,
      payload: about.content,
    });
  } catch (e) {
    yield put({
      type: LOAD_ABOUT_FAILED,
      message: e.message,
    });
  }
}
export default fetchAbout;
