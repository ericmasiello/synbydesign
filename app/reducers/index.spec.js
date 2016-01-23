import expect from 'expect';
import rootReducer from './index';
import { createStore } from 'redux';

describe('Redux Store', () => {

  const store = createStore(rootReducer);

  it('should be empty by default', ()=>{

    const actual = store.getState();
    expect(actual).toEqual({
      appLoading: {
        activeRequests: 0,
        loadedRequests: 0
      },
      portfolio: [],
      loadedAllItems: false
    });
  });

  describe('loadedAllItems state', () => {
    it('should update based on LOADED_ALL_PORTFOLIO event', ()=>{

      store.dispatch({
        type: 'LOADED_ALL_PORTFOLIO'
      });

      const actual = store.getState().loadedAllItems;
      expect(actual).toEqual(true);

    });
  });

  describe('appLoading state', () => {
    it('should respond to REQUEST_DATA events', ()=>{

      store.dispatch({
        type: 'REQUEST_DATA'
      });

      store.dispatch({
        type: 'REQUEST_DATA'
      });

      const actual = store.getState().appLoading;
      expect(actual).toEqual({
        activeRequests: 2,
        loadedRequests: 0
      });
    });

    it('should respond to RECEIVED_DATA events', ()=>{

      store.dispatch({
        type: 'RECEIVED_DATA'
      });

      const actual = store.getState().appLoading;
      expect(actual).toEqual({
        activeRequests: 2,
        loadedRequests: 1
      });
    });

    it('appLoading should respond with zeros for both values once activeRequests == loadedRequests', ()=>{

      store.dispatch({
        type: 'RECEIVED_DATA'
      });

      const actual = store.getState().appLoading;
      expect(actual).toEqual({
        activeRequests: 0,
        loadedRequests: 0
      });
    });
  });
});