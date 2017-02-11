/* @flow */
import type {
  AboutAction,
  LoadAboutActionType,
} from '../../../types';

export const LOAD_ABOUT: LoadAboutActionType = 'LOAD_ABOUT';

export function loadAbout(): AboutAction {
  return {
    type: LOAD_ABOUT,
    payload: '', // FIXME
  };
}
