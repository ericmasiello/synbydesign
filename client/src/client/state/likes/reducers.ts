import { Reducer } from 'redux';
import * as types from './types';

export const likeReducer: Reducer<Like[]> = (state = [] as Like[], action) => {
  if (action.error) {
    return state;
  }

  if (action.type === types.FETCH_LIKES) {
    return action.payload;
  }

  if (action.type === types.ADD_LIKE) {
    return [...state, action.payload];
  }

  if (action.type === types.REMOVE_LIKE) {
    return state.filter(like => like !== action.payload);
  }

  return state;
};
