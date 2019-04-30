import to from 'await-to-js';
import { ThunkActionCreator, LikeAction } from '../../../types.d';
import * as types from './types';
import { AnyAction } from 'redux';
import * as utils from './utils';

// TODO: this is duplicate of what exists in likeService
const createAction = (
  action: LikeActionType,
  id: string,
  title?: string,
): Promise<StatusResponse> => {
  const url = new URL(
    'https://script.google.com/macros/s/AKfycbwErydNjqBnj4xo_AHcAro-UziMCuciiMEORMQMuJ-fxhk4XxE/exec',
  );

  url.searchParams.set('id', id);
  url.searchParams.set('action', action);
  if (title) {
    url.searchParams.set('description', title);
  }

  return fetch(url.toString()).then(result => {
    return {
      code: result.status,
      message: result.statusText,
    };
  });
};

export const likeAction = (id: string, title?: string) =>
  createAction('like', id, title);

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

export const removeLike: ThunkActionCreator<Like> = (
  like: Like,
) => async dispatch => {
  if (utils.removeLike(like)) {
    dispatch(removeLikeActionCreator(like));
  }
};

export const removeLikeActionCreator = (like: Like): AnyAction => ({
  type: types.REMOVE_LIKE,
  payload: like,
});
