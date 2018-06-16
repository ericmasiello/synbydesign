import { ThunkActionCreator, LikeAction } from '../../../types.d';
import { FETCH_LIKES } from './types';

export const LOCAL_STORAGE_KEY = 'SYN_BY_DESIGN:LIKES';

export const fetchLikesActionCreator = (likes: Like[]): LikeAction => ({
  type: FETCH_LIKES,
  payload: likes,
});

export const fetchLikes: ThunkActionCreator<Like[]> = () => async dispatch => {
  // likes are stored locally in the browser only
  if (typeof window === 'undefined') {
    return dispatch(fetchLikesActionCreator([]));
  }

  // TODO: Replace with indexedDB as its its non-blocking
  const value = window.localStorage.getItem(LOCAL_STORAGE_KEY);

  if (value) {
    const likes: Like[] = JSON.parse(value) as Like[];
    return dispatch(fetchLikesActionCreator(likes));
  }
  return dispatch(fetchLikesActionCreator([]));
};
