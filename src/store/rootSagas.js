/* @flow */
import { takeLatest } from 'redux-saga/effects';
import { LOAD_ABOUT } from '../app/About/actions';
import fetchAbout from '../app/About/sagas';
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* sagas(): Generator<Object, void, void> {
  yield takeLatest(LOAD_ABOUT, fetchAbout);
}

export default sagas;
