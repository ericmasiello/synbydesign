import fetch from 'node-fetch';

const createAction = (
  action: LikeAction,
  id: string,
  title?: string,
): Promise<StatusResponse> => {
  const GOOGLE_SHEET_URL =
    'https://script.google.com/macros/s/AKfycbwErydNjqBnj4xo_AHcAro-UziMCuciiMEORMQMuJ-fxhk4XxE/exec';

  const params = `id=${id}&description=${title}&action=${action}`;

  return fetch(`${GOOGLE_SHEET_URL}?${params}`).then(result => {
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
