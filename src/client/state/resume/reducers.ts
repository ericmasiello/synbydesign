import { Reducer } from 'redux';
import * as types from './types';

export const resumeReducer: Reducer<Resume> = (
  state = {} as Resume,
  action,
) => {
  if (action.type === types.FETCH_RESUME && !action.error) {
    return action.payload.data;
  }
  return state;
};
