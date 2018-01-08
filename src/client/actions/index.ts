import { ThunkActionCreator } from '../../types.d';
import { dispatcher } from '../../utils/actions';

export const FETCH_USERS = 'fetch_users';
export const FETCH_PORTFOLIO_ITEMS = 'FETCH_PORTFOLIO_ITEMS';
export const FETCH_PORTFOLIO_DETAIL = 'FETCH_PORTFOLIO_DETAIL';

export const fetchUsers: ThunkActionCreator<User[]> = () =>
  async (dispatch, getState, api) =>
    dispatcher<User[]>(dispatch, FETCH_USERS)(api.get('/users'));

export const fetchPortfolioItems: ThunkActionCreator<Portfolio[]> = ({
  pageSize = 20,
}: {
  pageSize?: number,
} = {}) =>
  async (dispatch, getState, api) =>
    dispatcher<Portfolio[]>(dispatch, FETCH_PORTFOLIO_ITEMS)(api.get(`/portfolio?pageSize=${pageSize}`));

export const fetchPortfolioDetail: ThunkActionCreator<Portfolio> = (id: string) =>
  async (dispatch, getState, api) =>
    dispatcher<Portfolio>(dispatch, FETCH_PORTFOLIO_DETAIL)(api.get(`/portfolio/${id}`));
