import { AxiosPromise } from 'axios';
import { AnyAction } from 'redux';
import to from 'await-to-js';
import pickBy from 'lodash-es/pickBy';

export const getHeaderMeta = (headers: {
  [x: string]: any;
}): { [x: string]: any } => {
  return pickBy(headers, (value, key) => {
    return key.indexOf('_') === 0;
  });
};

export const composeActionFromAsyncRequest = (type: string) => async (
  request: AxiosPromise,
): Promise<AnyAction> => {
  const [err, res] = await to(request);

  if (err) {
    return {
      type,
      payload: err,
      error: true,
    };
  }

  return {
    type,
    payload: res,
    meta: res && getHeaderMeta(res.headers),
  };
};
