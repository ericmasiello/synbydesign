import { combineReducers, Reducer } from 'redux';
import { portfolioReducer, portfolioMetaReducer } from './portfolioReducer';
import resumeReducer from './resumeReducer';

export default <Reducer<AppState>>combineReducers({
  resume: resumeReducer,
  portfolioItems: portfolioReducer,
  ui: <Reducer<UIMeta>>combineReducers({
    portfolio: portfolioMetaReducer,
  }),
});
