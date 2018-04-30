import { Reducer } from 'redux';
import { FETCH_RESUME } from '../actions';

const resumeReducer: Reducer<Resume> = (state = {} as Resume, action) => {
  if (action.type === FETCH_RESUME && !action.error) {
    return action.payload.data;
  }
  return state;
};

export default resumeReducer;
