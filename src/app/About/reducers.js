/* @flow */
import {
  LOAD_ABOUT,
} from './actions';
import type {
  AboutAction,
} from '../../../types';

const defaultAboutAction = {
  type: LOAD_ABOUT,
  payload: '',
};

export default function aboutReducer(
  state: string = '',
  action: AboutAction = defaultAboutAction) {
  switch (action.type) {
    case LOAD_ABOUT:
      return action.payload;
    default:
      return state;
  }
}
