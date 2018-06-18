import * as queryString from 'query-string';
import {
  PortfolioThunkActionCreator,
  PortfolioDetailThunkActionCreator,
} from '../../../types.d';
import { dispatcher } from '../../../utils/actions';
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

  return async (dispatch, getState, api) =>
    dispatcher<Portfolio[]>(dispatch, types.FETCH_PORTFOLIO_ITEMS)(
      api.get(`/portfolio?${query}`),
    );
};

export const fetchPortfolioDetail: PortfolioDetailThunkActionCreator<
  Portfolio
> = (id: string) => async (dispatch, getState, api) =>
  dispatcher<Portfolio>(dispatch, types.FETCH_PORTFOLIO_DETAIL)(
    api.get(`/portfolio/${id}`),
  );
