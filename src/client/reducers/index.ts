import { combineReducers, Reducer } from 'redux';
import usersReducer from './usersReducer';
import portfolioReducer from './portfolioReducer';

export default <Reducer<AppState>>combineReducers({
  users: usersReducer,
  portfolioItems: portfolioReducer,
});
