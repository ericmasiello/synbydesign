import * as actions from '../actions';
import { FETCH_RESUME } from '../types';
import { AxiosInstance } from 'axios';
import { Dispatch } from 'redux';

const mockResume: Resume = {
  ownerName: 'Eric',
  ownerTitle: 'Developer',
  lead: 'To be the best',
};
const error = new Error('There was an error :(');
let dispatch: any;
let getState: any;
let api: any;

describe('fetchResume', () => {
  beforeEach(() => {
    dispatch = jest.fn() as Dispatch<Resume>;
    getState = jest.fn() as () => Resume;
    api = {} as AxiosInstance;
  });

  test('should dispatch an action when data is returned', () => {
    api.get = jest.fn(() => Promise.resolve(mockResume));

    return actions
      .fetchResume()(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toBeCalledWith({
          type: FETCH_RESUME,
          meta: {},
          payload: mockResume,
        });
      });
  });

  test('should dispatch an error when api cannot get data', () => {
    api.get = jest.fn(() => Promise.reject(error));

    return actions
      .fetchResume()(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toBeCalledWith({
          type: FETCH_RESUME,
          payload: error,
          error: true,
        });
      });
  });

  test('should call /resume endpoint', () => {
    api.get = jest.fn(() => Promise.resolve());

    return actions
      .fetchResume()(dispatch, getState, api)
      .then(() => {
        expect(api.get).toBeCalledWith('/resume');
      });
  });
});
