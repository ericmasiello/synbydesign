import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';

export type ThunkActionCreator<S> = (
  ...args: any[]
) => ThunkAction<Promise<any>, S, AxiosInstance>;
