import { combineReducers } from 'redux';
import AppLoadingReducer from './app-loading.reducer';
import PortfolioReducer from './portfolio.reducer';

//import BooksReducer from './reducer-books';
//import ActiveBookReducer from './reducer-active-book';

/*
 * The object returned from here represents our GLOBAL
 * application state - the whoooole thing.
 */
const rootReducer = combineReducers({
  appLoading: AppLoadingReducer,
  portfolio: PortfolioReducer
  //selectedPortfolioItem: SelectedPortfolioReducer,
});

export default rootReducer;