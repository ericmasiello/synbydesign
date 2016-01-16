import { combineReducers } from 'redux';
import AppLoadingReducer from './appLoadingReducer';

//import BooksReducer from './reducer-books';
//import ActiveBookReducer from './reducer-active-book';

/*
 * The object returned from here represents our GLOBAL
 * application state - the whoooole thing.
 */
const rootReducer = combineReducers({
  //portfolio: PortfolioReducer,
  //selectedPortfolioItem: SelectedPortfolioReducer,
  appLoading: AppLoadingReducer
});

export default rootReducer;