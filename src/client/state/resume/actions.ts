import { ThunkActionCreator } from '../../../types.d';
import * as types from './types';
import { dispatcher } from '../../../utils/actions';

export const fetchResume: ThunkActionCreator<any> = () => async (
  dispatch,
  getState,
  api,
) => dispatcher<Portfolio[]>(dispatch, types.FETCH_RESUME)(api.get(`/resume`));
