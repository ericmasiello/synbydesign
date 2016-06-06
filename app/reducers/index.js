import { combineReducers } from 'redux';
import AppLoadingReducer from './app-loading.reducer';
import PortfolioReducer from './portfolio.reducer';
import LoadedAllItemsReducer from './loaded-all-items.reducer';
import AboutContentReducer from './about-content.reducer';
import LoadedAboutContentReducer from './loaded-about-content.reducer';
import ChangeLogReducer from './change-log.reducer';
import LoadedChangeLogReducer from './loaded-change-log.reducer';

/*
 * The object returned from here represents our GLOBAL
 * application state - the whoooole thing.
 */
const rootReducer = combineReducers({
  appLoading: AppLoadingReducer,
  aboutContent: AboutContentReducer,
  loadedAboutContent: LoadedAboutContentReducer,
  portfolio: PortfolioReducer,
  loadedAllItems: LoadedAllItemsReducer,
  changeLog: ChangeLogReducer,
  loadedChangeLog: LoadedChangeLogReducer
});

export default rootReducer;
