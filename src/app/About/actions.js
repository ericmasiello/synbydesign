/* @flow */
import type {
  Syn$Action,
} from '../../../types';

export const LOAD_ABOUT: string = 'LOAD_ABOUT';
export const LOAD_ABOUT_SUCCEEDED: string = 'LOAD_ABOUT_SUCCEEDED';
export const LOAD_ABOUT_FAILED: string = 'LOAD_ABOUT_FAILED';

export function loadAbout(): Syn$Action {
  return {
    type: LOAD_ABOUT,
    payload: '', // FIXME
  };
}
