import { LOAD_ABOUT_CONTENT } from '../actions/types';

const loadedAboutContentReducer = (state = false, action = {}) => {
  switch (action.type) {
    case LOAD_ABOUT_CONTENT:
      return true;
    default:
      return state;
  }
};

export default loadedAboutContentReducer;
