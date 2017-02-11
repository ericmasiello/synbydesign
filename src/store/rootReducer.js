/* @flow */
import { combineReducers } from 'redux';
import portfolioReducer from '../app/Portfolio/reducers';

export default combineReducers({
  selectedPortfolioId: () => 'some-id-value',
  portfolio: portfolioReducer,
  about: () => 'About me!',
});
