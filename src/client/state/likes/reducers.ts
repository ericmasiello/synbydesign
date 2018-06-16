import { Reducer } from 'redux';
import { LikeAction } from '../../../types.d';
import { FETCH_LIKES } from './types';

export const likeReducer: Reducer<Like[]> = (state = [] as Like[], action) => {
  const likeAction = action as LikeAction;
  if (likeAction.type === FETCH_LIKES && !likeAction.error) {
    return likeAction.payload;
  }
  return state;
};
