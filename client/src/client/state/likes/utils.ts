import * as browser from '../../utils/browser';
// TODO: Replace with indexedDB as its non-blocking

export const LOCAL_STORAGE_KEY = 'SYN_BY_DESIGN:LIKES';

const updateLikes = (likes: Set<Like>) => {
  window.localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(Array.from(likes)),
  );
};

export const getLikes = (): Set<Like> => {
  if (!browser.isBrowser()) {
    return new Set();
  }
  const value = window.localStorage.getItem(LOCAL_STORAGE_KEY);

  if (value) {
    return new Set(JSON.parse(value) as Like[]);
  }
  return new Set();
};

export const addLike = (like: Like): Like | undefined => {
  if (!browser.isBrowser()) {
    return like;
  }

  const likes = getLikes();

  if (likes.has(like)) {
    return;
  }

  likes.add(like);

  updateLikes(likes);

  return like;
};

export const removeLike = (like: Like): boolean => {
  if (!browser.isBrowser()) {
    return false;
  }

  const likes = getLikes();

  const removed = likes.delete(like);

  if (removed) {
    updateLikes(likes);
  }

  return removed;
};
