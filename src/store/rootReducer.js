/* @flow */
import { combineReducers } from 'redux';
import {
  portfolioReducer,
  selectedPortfolioIdReducer,
} from '../app/Portfolio/reducers';
import aboutReducer from '../app/About/reducers';

export default combineReducers({
  selectedPortfolioId: selectedPortfolioIdReducer,
  portfolio: portfolioReducer,
  about: aboutReducer,
});
