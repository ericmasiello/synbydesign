import { combineReducers, Reducer } from 'redux';
import portfolioReducer from './portfolioReducer';
import resumeReducer from './resumeReducer';

export default <Reducer<AppState>>combineReducers({
  resume: resumeReducer,
  portfolioItems: portfolioReducer,
});
