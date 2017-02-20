/* @flow */
// FIXME: this should be handled elsewhere
import 'babel-polyfill';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_ABOUT,
  LOAD_ABOUT_SUCCEEDED,
  LOAD_ABOUT_FAILED,
} from './actions';
import type {
  About,
} from '../../../types';

const Api = {
  fetchAbout(): Promise<About> {
    // FIXME!
    return axios.get('http://localhost:4000/api/v1/about')
      .then(({ data }) => {
        const response: About = data;
        console.log('Repsonse', response);
        return response;
      });
  },
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchAbout() {
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
