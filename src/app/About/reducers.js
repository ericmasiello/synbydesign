/* @flow */
import {
  LOAD_ABOUT,
  LOAD_ABOUT_SUCCEEDED,
} from './actions';
import type {
  AboutAction,
} from '../../../types';

const defaultAboutAction: AboutAction = {
  type: LOAD_ABOUT,
  payload: '',
};

export default function aboutReducer(
  state: string = '',
  action: AboutAction = defaultAboutAction) {
  switch (action.type) {
    case LOAD_ABOUT_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
}
