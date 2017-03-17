/* @flow */
import {
  LOAD_ABOUT,
  LOAD_ABOUT_SUCCEEDED,
} from './actions';
import type {
  Syn$Action,
} from '../../../types';

const defaultAboutAction: Syn$Action = {
  type: LOAD_ABOUT,
  payload: '',
};

export default function aboutReducer(
  state: string = '',
  action: Syn$Action = defaultAboutAction) {
  switch (action.type) {
    case LOAD_ABOUT_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
}
