import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { AnyAction } from 'redux';

// ThunkActionCreator = (...any) => (dispatch, getstate, axios) => new Promise()
export type ThunkActionCreator<S> = (
  ...args: any[]
) => ThunkAction<Promise<any>, S, AxiosInstance, AnyAction>;

export type PortfolioThunkActionCreator<S> = (
  params: PortfolioRequestParams,
) => ThunkAction<Promise<any>, S, AxiosInstance, AnyAction>;

export type PortfolioDetailThunkActionCreator<S> = (
  id: string,
) => ThunkAction<Promise<any>, S, AxiosInstance, AnyAction>;

export interface LikeAction extends AnyAction {
  payload: Like[];
}
