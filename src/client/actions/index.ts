import { ThunkActionCreator } from '../../types.d';
import { dispatcher } from '../../utils/actions';

export const FETCH_PORTFOLIO_ITEMS = 'FETCH_PORTFOLIO_ITEMS';
export const FETCH_PORTFOLIO_DETAIL = 'FETCH_PORTFOLIO_DETAIL';
export const FETCH_RESUME = 'fetch_resume';

export const fetchResume: ThunkActionCreator<any> = () => async (
  dispatch,
  getState,
  api,
) => dispatcher<Portfolio[]>(dispatch, FETCH_RESUME)(api.get(`/resume`));

export const fetchPortfolioItems: ThunkActionCreator<Portfolio[]> = (
  params: FetchPortfolioItemsParams,
) => async (dispatch, getState, api) =>
  dispatcher<Portfolio[]>(dispatch, FETCH_PORTFOLIO_ITEMS)(
    api.get(`/portfolio?pageSize=${params.pageSize}`),
  );

export const fetchPortfolioDetail: ThunkActionCreator<Portfolio> = (
  id: string,
) => async (dispatch, getState, api) =>
  dispatcher<Portfolio>(dispatch, FETCH_PORTFOLIO_DETAIL)(
    api.get(`/portfolio/${id}`),
  );
