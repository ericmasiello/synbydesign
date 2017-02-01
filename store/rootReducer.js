/* @flow */
import { combineReducers } from 'redux';

export default combineReducers({
  portfolio: () => ['hello', 'world', 'how', 'are', 'you'],
  about: () => 'About me!',
});
