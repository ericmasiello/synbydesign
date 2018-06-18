import { Reducer } from 'redux';
import * as types from './types';

export const likeReducer: Reducer<Like[]> = (state = [] as Like[], action) => {
  if (action.type === types.FETCH_LIKES && !action.error) {
    return action.payload;
  }

  if (action.type === types.ADD_LIKE && !action.error) {
    return [...state, action.payload];
  }

  return state;
};
