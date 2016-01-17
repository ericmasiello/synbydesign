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
      portfolio: []
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


  //
  //it('should respond to TOGGLE_TODO events', ()=>{
  //
  //  store.dispatch({
  //    type: 'ADD_TODO',
  //    id: 2,
  //    text: 'Toggle Me Baby'
  //  });
  //
  //  store.dispatch({
  //    type: 'TOGGLE_TODO',
  //    id: 2
  //  });
  //
  //  const actual = store.getState();
  //  expect(actual).toEqual({
  //    todos: [{
  //      id: 1,
  //      text: 'Hello world',
  //      completed: false
  //    },{
  //      id: 2,
  //      text: 'Toggle Me Baby',
  //      completed: true
  //    }],
  //    visibilityFilter: 'SHOW_ALL'
  //  });
  //});
  //
  //it('should respond to REMOVE_TODO events', ()=>{
  //
  //  store.dispatch({
  //    type: 'REMOVE_TODO',
  //    id: 1
  //  });
  //
  //  const actual = store.getState();
  //  expect(actual).toEqual({
  //    todos: [{
  //      id: 2,
  //      text: 'Toggle Me Baby',
  //      completed: true
  //    }],
  //    visibilityFilter: 'SHOW_ALL'
  //  });
  //});
  //
  //it('should respond to REMOVE_ALL_TODOS events', ()=>{
  //
  //  store.dispatch({
  //    type: 'ADD_TODO',
  //    id: 1,
  //    text: 'Stuff'
  //  });
  //  store.dispatch({
  //    type: 'ADD_TODO',
  //    id: 3,
  //    text: 'More stuff'
  //  });
  //  store.dispatch({
  //    type: 'REMOVE_ALL_TODOS'
  //  });
  //
  //  const actual = store.getState();
  //  expect(actual).toEqual({
  //    todos: [],
  //    visibilityFilter: 'SHOW_ALL'
  //  });
  //});
  //
  //it("should respond to visibility events", () => {
  //
  //  store.dispatch({
  //    type: 'TOGGLE_SHOW_COMPLETED'
  //  });
  //
  //  expect(store.getState().visibilityFilter).toEqual('SHOW_COMPLETED');
  //
  //  store.dispatch({
  //    type: 'TOGGLE_SHOW_ALL'
  //  });
  //
  //  expect(store.getState().visibilityFilter).toEqual('SHOW_ALL');
  //
  //})
});