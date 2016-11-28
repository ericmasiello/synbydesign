import { LOAD_ABOUT_CONTENT } from '../actions/types';

export default (state = '', action = {}) => {
  switch (action.type) {
    case LOAD_ABOUT_CONTENT:
      return action.payload.data.content;
    default:
      return state;
  }
};
