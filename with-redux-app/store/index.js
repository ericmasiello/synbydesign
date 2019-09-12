import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import {
  initialState as portfolioItemsInitialState,
  portfolioReducer,
} from './portfolio';

const defaultState = {
  portfolioItems: portfolioItemsInitialState,
};

export function initializeStore (initialState = defaultState) {
  return createStore(
    combineReducers({
      portfolioItems: portfolioReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
