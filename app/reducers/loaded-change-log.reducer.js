import { LOAD_CHANGE_LOG } from '../actions/types';

export default (state = false, action = {}) => {
  switch (action.type) {
    case LOAD_CHANGE_LOG:
      return true;
    default:
      return state;
  }
};
