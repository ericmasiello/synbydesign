import * as actions from '../actions';
import * as types from '../types';
import * as utils from '../utils';
import { AxiosInstance } from '../../../../../node_modules/axios';
jest.mock('../utils');

// @ts-ignore
utils.getLikes.mockImplementation(() => {
  const s = new Set();
  s.add('foo');
  s.add('bar');
  return s;
});

describe('fetchLikesActionCreator', () => {
  test('should return action payload', () => {
    const likes = ['foo', 'bar'];
    const result = actions.fetchLikesActionCreator(likes);

    expect(result).toEqual({
      type: types.FETCH_LIKES,
      payload: likes,
    });
  });
});

describe('addLikeActionCreator', () => {
  test('should return action payload', () => {
    const result = actions.addLikeActionCreator('baz');

    expect(result).toEqual({
      type: types.ADD_LIKE,
      payload: 'baz',
    });
  });
});

describe('fetchLikes', () => {
  test('should dispatch a FETCH_LIKES action with data from storage', () => {
    const mockDispath = jest.fn();
    const partial = actions.fetchLikes();

    return partial(mockDispath, jest.fn(), {} as AxiosInstance).then(() => {
      expect(mockDispath).toBeCalledWith({
        type: types.FETCH_LIKES,
        payload: ['foo', 'bar'],
      });
    });
  });
});

describe('addLike', () => {
  describe('new like added', () => {
    beforeEach(() => {
      // @ts-ignore
      utils.addLike.mockImplementation(s => s);
    });

    test('should only dispatch a ADD_LIKE action when submitting successfully', () => {
      const mockDispath = jest.fn();
      const mockPost = jest.fn().mockImplementation(() => Promise.resolve({}));
      const partial = actions.addLike('baz');
      // @ts-ignore
      const mockAxios = { post: mockPost } as AxiosInstance;

      return partial(mockDispath, jest.fn(), mockAxios).then(() => {
        expect(mockDispath).toBeCalledWith({
          type: types.ADD_LIKE,
          payload: 'baz',
        });

        expect(mockDispath).toHaveBeenCalledTimes(1);
      });
    });

    test('should dispatch an ADD_LIKE and error action when not saving successfully', () => {
      const mockDispath = jest.fn();
      const error = new Error('something bad happened');
      const mockPost = jest
        .fn()
        .mockImplementation(() => Promise.reject(error));
      const partial = actions.addLike('baz');
      // @ts-ignore
      const mockAxios = { post: mockPost } as AxiosInstance;

      return partial(mockDispath, jest.fn(), mockAxios).then(() => {
        expect(mockDispath).toBeCalledWith({
          type: types.ADD_LIKE,
          payload: 'baz',
        });

        expect(mockDispath).toBeCalledWith({
          type: types.ADD_LIKE,
          error: true,
          payload: error,
        });

        expect(mockDispath).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('pre existing like added', () => {
    beforeEach(() => {
      // @ts-ignore
      utils.addLike.mockImplementation(() => undefined);
    });

    test('should not dispatch a ADD_LIKE action', () => {
      const mockDispath = jest.fn();
      const partial = actions.addLike('baz');

      return partial(mockDispath, jest.fn(), {} as AxiosInstance).then(() => {
        expect(mockDispath).not.toBeCalled();
      });
    });
  });
});
