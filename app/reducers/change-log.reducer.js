import { LOAD_CHANGE_LOG } from '../actions/types';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_CHANGE_LOG:
      return action.payload.data;
    default:
      return state;
  }
};
