import { combineReducers } from 'redux';
import AppLoadingReducer from './app-loading.reducer';
import PortfolioReducer from './portfolio.reducer';
import LoadedAllItemsReducer from './loaded-all-items.reducer';
import AboutContentReducer from './about-content.reducer';

/*
 * The object returned from here represents our GLOBAL
 * application state - the whoooole thing.
 */
const rootReducer = combineReducers({
  appLoading: AppLoadingReducer,
  aboutContent: AboutContentReducer,
  portfolio: PortfolioReducer,
  loadedAllItems: LoadedAllItemsReducer
});

export default rootReducer;