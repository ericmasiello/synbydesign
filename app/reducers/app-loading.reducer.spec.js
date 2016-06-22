'use strict';
import expect from 'expect';
import reducer from './app-loading.reducer';
import { REQUEST_DATA, RECEIVED_DATA } from '../actions/types';

describe('App Loading Reducer', () => {

  const initialState = {
    activeRequests: 0,
    loadedRequests: 0
  };

  it('should increment active requests when responding to REQUEST_DATA', () => {

    const actual = reducer(initialState, {
      type: REQUEST_DATA
    });

    const expected = {
      activeRequests: 1,
      loadedRequests: 0
    };

    expect(actual).toEqual(expected);
  });

  it('should increment loaded requests when responding to RECEIVED_DATA', ()=>{

    const actual = reducer(initialState, {
      type: RECEIVED_DATA
    });

    const expected = {
      activeRequests: 0,
      loadedRequests: 1
    };

    expect(actual).toEqual(expected);
  });

  it('should should return zeros for both values when active requests is equal to loaded requests', ()=>{

    const actual = reducer({
      activeRequests: 1,
      loadedRequests: 0
    }, {
      type: RECEIVED_DATA
    });

    const expected = {
      activeRequests: 0,
      loadedRequests: 0
    };

    expect(actual).toEqual(expected);
  });
});
