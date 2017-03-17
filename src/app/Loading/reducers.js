/* @flow */
import type { Syn$Action } from '../../../types';
import {
  LOAD_ABOUT,
  LOAD_ABOUT_SUCCEEDED,
  LOAD_ABOUT_FAILED,
} from '../About/actions';
import {
  LOAD_PORTFOLIO,
  LOAD_PORTFOLIO_DETAIL,
  LOAD_PORTFOLIO_FAILED,
  LOAD_PORTFOLIO_SUCCEEDED,
  LOAD_PORTFOLIO_DETAIL_FAILED,
  LOAD_PORTFOLIO_DETAIL_SUCCEEDED,
} from '../Portfolio/actions';

const defaultAction: Syn$Action = {
  type: '',
};

export default function loadingCountReducer(
  state: number = 0,
  action: Syn$Action = defaultAction) {
  switch (action.type) {
    case LOAD_ABOUT:
    case LOAD_PORTFOLIO:
    case LOAD_PORTFOLIO_DETAIL:
      return state + 1;
    case LOAD_ABOUT_SUCCEEDED:
    case LOAD_ABOUT_FAILED:
    case LOAD_PORTFOLIO_SUCCEEDED:
    case LOAD_PORTFOLIO_FAILED:
    case LOAD_PORTFOLIO_DETAIL_SUCCEEDED:
    case LOAD_PORTFOLIO_DETAIL_FAILED:
      return (state - 1) < 0 ? 0 : (state - 1);
    default:
      return state;
  }
}
