/* @flow */
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import type { RootState } from '../../types';

export default function initializeStore(state: RootState) {
  return createStore(rootReducer, state);
}
