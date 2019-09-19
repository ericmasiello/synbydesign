import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  initialState as portfolioItemsInitialState,
  portfolioReducer,
} from './portfolio';

import { errorReducer } from './error';

const defaultState = {
  portfolioItems: portfolioItemsInitialState,
  error: null,
};

export function initializeStore(initialState = defaultState) {
  return createStore(
    combineReducers({
      portfolioItems: portfolioReducer,
      error: errorReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
