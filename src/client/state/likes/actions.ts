import { ThunkActionCreator, LikeAction } from '../../../types.d';
import * as types from './types';
import { AnyAction } from 'redux';
import * as utils from './utils';

export const fetchLikesActionCreator = (likes: Like[]): LikeAction => ({
  type: types.FETCH_LIKES,
  payload: likes,
});

export const addLikeActionCreator = (like: Like): AnyAction => ({
  type: types.ADD_LIKE,
  payload: like,
});

export const fetchLikes: ThunkActionCreator<Like[]> = () => async dispatch =>
  dispatch(fetchLikesActionCreator(Array.from(utils.getLikes())));

export const addLike: ThunkActionCreator<Like> = (
  like: Like,
) => async dispatch => {
  // only dispatch an action if the added like is new
  // duplicates will not dispatch new actions
  if (utils.addLike(like)) {
    return dispatch(addLikeActionCreator(like));
  }
};
