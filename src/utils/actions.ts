import { AxiosPromise } from 'axios';
import { Dispatch } from 'redux';
import to from 'await-to-js';
import pickBy from 'lodash-es/pickBy';

export const getHeaderMeta = (headers: {
  [x: string]: any;
}): { [x: string]: any } => {
  return pickBy(headers, (value, key) => {
    return key.indexOf('_') === 0;
  });
};

export const dispatcher = <T>(dispatch: Dispatch<T>, type: string) => {
  return async (request: AxiosPromise) => {
    const [err, res] = await to(request);

    if (err) {
      dispatch({
        type,
        payload: err,
        error: true,
      });
      return true;
    }

    dispatch({
      type,
      payload: res,
      meta: res && getHeaderMeta(res.headers),
    });
  };
};
