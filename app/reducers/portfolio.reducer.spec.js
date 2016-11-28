import expect from 'expect';
import reducer from './portfolio.reducer';
import { LOAD_PORTFOLIO_ALL } from '../actions/types';

describe('Portfolio Reducer', () => {
  it('should return payload data when responding to LOAD_PORTFOLIO_ALL', () => {
    const actual = reducer([], {
      type: LOAD_PORTFOLIO_ALL,
      payload: {
        data: ['first', 'second', 'third'],
      },
    });

    const expected = ['first', 'second', 'third'];

    expect(actual).toEqual(expected);
  });
});
