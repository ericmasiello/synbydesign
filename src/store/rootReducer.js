/* @flow */
import { combineReducers } from 'redux';
import portfolioReducer from '../app/Portfolio/reducers';

export default combineReducers({
  portfolio: portfolioReducer,
  about: () => 'About me!',
});
