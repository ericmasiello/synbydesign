import { combineReducers } from 'redux';
import AppLoadingReducer from './app-loading.reducer';
import PortfolioReducer from './portfolio.reducer';
import LoadedAllItemsReducer from './loaded-all-items.reducer';

/*
 * The object returned from here represents our GLOBAL
 * application state - the whoooole thing.
 */
const rootReducer = combineReducers({
  appLoading: AppLoadingReducer,
  portfolio: PortfolioReducer,
  loadedAllItems: LoadedAllItemsReducer
});

export default rootReducer;