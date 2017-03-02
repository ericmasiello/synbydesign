/* @flow */
import {
  LOAD_ABOUT,
  LOAD_ABOUT_SUCCEEDED,
} from './actions';
import type {
  Action,
} from '../../../types';

const defaultAboutAction: Action = {
  type: LOAD_ABOUT,
  payload: '',
};

export default function aboutReducer(
  state: string = '',
  action: Action = defaultAboutAction) {
  switch (action.type) {
    case LOAD_ABOUT_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
}
