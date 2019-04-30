import * as queryString from 'query-string';
import {
  PortfolioThunkActionCreator,
  PortfolioDetailThunkActionCreator,
} from '../../../types.d';
import { composeActionFromAsyncRequest } from '../../../utils/actions';
import * as types from './types';

export const fetchPortfolioItems: PortfolioThunkActionCreator<Portfolio[]> = (
  params: PortfolioRequestParams,
) => {
  const {
    requestedPageNumber,
    pageSize,
    categories = [],
    tags = [],
    searchTerm,
  } = params;

  const query = queryString.stringify({
    requestedPageNumber,
    pageSize,
    categores: categories.join(','),
    tags: tags.join(','),
    searchTerm,
  });

  return async (dispatch, getState, api) => {
    const action = await composeActionFromAsyncRequest(
      types.FETCH_PORTFOLIO_ITEMS,
    )(api.get(`/portfolio?${query}`));
    dispatch(action);
  };
};

export const fetchPortfolioDetail: PortfolioDetailThunkActionCreator<
  Portfolio
> = (id: string) => async (dispatch, getState, api) => {
  const action = await composeActionFromAsyncRequest(
    types.FETCH_PORTFOLIO_DETAIL,
  )(api.get(`/portfolio/${id}`));
  dispatch(action);
};
