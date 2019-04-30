import fetch from 'node-fetch';

const createAction = (
  action: LikeAction,
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
export const unlikeAction = (id: string, title?: string) =>
  createAction('unlike', id, title);
