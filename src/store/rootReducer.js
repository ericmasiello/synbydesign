/* @flow */
// import { combineReducers } from 'redux';
import {
  portfolioReducer,
  selectedPortfolioIdReducer,
} from '../app/Portfolio/reducers';
import aboutReducer from '../app/About/reducers';

const rootReducer = {
  selectedPortfolioId: selectedPortfolioIdReducer,
  portfolio: portfolioReducer,
  about: aboutReducer,
};

export default rootReducer;
