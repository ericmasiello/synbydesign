/* @flow */
import { combineReducers } from 'redux';
import {
  portfolioReducer,
  selectedPortfolioIdReducer,
} from '../app/Portfolio/reducers';

export default combineReducers({
  selectedPortfolioId: selectedPortfolioIdReducer,
  portfolio: portfolioReducer,
  about: () => 'About me!',
});
