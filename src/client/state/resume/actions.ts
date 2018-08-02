import { ThunkActionCreator } from '../../../types.d';
import * as types from './types';
import { composeActionFromAsyncRequest } from '../../../utils/actions';

export const fetchResume: ThunkActionCreator<any> = () => async (
  dispatch,
  getState,
  api,
) => {
  const action = await composeActionFromAsyncRequest(types.FETCH_RESUME)(
    api.get(`/resume`),
  );
  dispatch(action);
};
