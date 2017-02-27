/* @flow */
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_ABOUT,
  LOAD_ABOUT_SUCCEEDED,
  LOAD_ABOUT_FAILED,
} from './actions';
import type {
  About,
  Action,
} from '../../../types';

export const Api = {
  fetchAbout(): Promise<About> {
    return axios.get('/api/v1/about')
      .then(({ data }) => {
        const response: About = data;
        return response;
      });
  },
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchAbout(): Generator<Action, void, About> {
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

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* aboutSaga(): Generator<Object, void, void> {
  yield takeLatest(LOAD_ABOUT, fetchAbout);
}

export default aboutSaga;
