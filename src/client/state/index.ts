import { combineReducers, Reducer } from 'redux';
import portfolio from './portfolio';
import resume from './resume/index';
import likes from '../state/likes';

export default <Reducer<AppState>>combineReducers({
  resume: resume.resumeReducer,
  portfolioItems: portfolio.portfolioReducer,
  ui: <Reducer<UIMeta>>combineReducers({
    portfolio: portfolio.portfolioMetaReducer,
  }),
  likes: likes.likeReducer,
});
