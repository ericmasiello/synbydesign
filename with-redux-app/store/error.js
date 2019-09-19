import { SET_PORTFOLIO_ITEM } from './portfolio';

export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case SET_PORTFOLIO_ITEM:
      if (action.error) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
};
