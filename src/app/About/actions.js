/* @flow */
import type {
  AboutAction,
  LoadAboutActionType,
} from '../../../types';

export const LOAD_ABOUT: LoadAboutActionType = 'LOAD_ABOUT';
export const LOAD_ABOUT_SUCCEEDED: string = 'LOAD_ABOUT_SUCCEEDED';
export const LOAD_ABOUT_FAILED: string = 'LOAD_ABOUT_FAILED';

export function loadAbout(): AboutAction {
  return {
    type: LOAD_ABOUT,
    payload: '', // FIXME
  };
}
