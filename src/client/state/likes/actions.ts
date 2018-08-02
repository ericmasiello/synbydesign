import to from 'await-to-js';
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

export const addLikeActionCreatorError = (error: Error): AnyAction => ({
  type: types.ADD_LIKE,
  payload: error,
  error: true,
});

export const fetchLikes: ThunkActionCreator<Like[]> = () => dispatch =>
  Promise.resolve(
    dispatch(fetchLikesActionCreator(Array.from(utils.getLikes()))),
  );

export const addLike: ThunkActionCreator<Like> = (like: Like) => async (
  dispatch,
  getState,
  api,
) => {
  if (utils.addLike(like)) {
    dispatch(addLikeActionCreator(like));
    // tslint:disable-next-line
    const [err, res] = await to(api.post(`/like/${like}`));
    if (err) {
      return dispatch(addLikeActionCreatorError(err));
    }
  }
};
