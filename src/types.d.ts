import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { AnyAction } from 'redux';

// ThunkActionCreator = (...any) => (dispatch, getstate, axios) => new Promise()
export type ThunkActionCreator<S> = (
  ...args: any[]
) => ThunkAction<Promise<any>, S, AxiosInstance>;

export type PortfolioThunkActionCreator<S> = (
  params: PortfolioRequestParams,
) => ThunkAction<Promise<any>, S, AxiosInstance>;

export type PortfolioDetailThunkActionCreator<S> = (
  id: string,
) => ThunkAction<Promise<any>, S, AxiosInstance>;

export interface LikeAction extends AnyAction {
  payload: Like[];
}
