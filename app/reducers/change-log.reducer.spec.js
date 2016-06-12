'use strict';
import expect from 'expect';
import reducer from './change-log.reducer';
import { LOAD_CHANGE_LOG } from '../actions/types';
import mockData from '../test-data/change-log.mock';

describe('Change Log Reducer', () => {

  const initialState = [];

  it('should return change log data as list when responding to LOAD_CHANGE_LOG', () => {

    const actual = reducer(initialState, {
      type: LOAD_CHANGE_LOG,
      payload: {
        data: mockData
      }
    });

    const expected = mockData;

    expect(actual).toEqual(expected);
  });
});
