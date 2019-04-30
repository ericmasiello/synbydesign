import * as reducers from '../reducers';
import * as types from '../types';

describe('likeReducer', () => {
  test('should return an empty list when initializing', () => {
    // @ts-ignore
    const result = reducers.likeReducer(undefined, {});

    expect(result).toEqual([]);
  });

  test('should return payload if action is FETCH_LIKES and there is no error', () => {
    const result = reducers.likeReducer([], {
      type: types.FETCH_LIKES,
      payload: ['foo', 'bar'],
    });

    expect(result).toEqual(['foo', 'bar']);
  });

  test('should return initial state if there is an error', () => {
    const result = reducers.likeReducer(['foo', 'bar'], {
      type: types.FETCH_LIKES,
      error: true,
    });

    expect(result).toEqual(['foo', 'bar']);
  });

  test('should return payload appended to state if action is ADD_LIKE', () => {
    const result = reducers.likeReducer(['foo', 'bar'], {
      type: types.ADD_LIKE,
      payload: 'baz',
    });

    expect(result).toEqual(['foo', 'bar', 'baz']);
  });
});
