/* @flow */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import type { RootState } from '../../types';
import aboutSaga from '../app/About/sagas';

export default function initializeStore(state: RootState) {
  /*
   * KLUDGE: createStore only seems to work when state is passed
   * as a generic Object type. To work around this, I recast
   * state as a generic Object
   */
  const s: Object = state;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers(rootReducer),
    s,
    compose(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(aboutSaga);
  return store;
}
