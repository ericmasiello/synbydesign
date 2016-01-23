import expect from 'expect';
import middleware from './loaded-all-dispatcher.middleware';

describe('Loaded All Dispatcher Middleware', () => {
  'use strict';

  let calledListenedForCount = 0;
  let calledDispatchUponMatchingEventCount = 0;

  const mockNext = function(action){};

  const mockStore = {
    dispatch(action){
      switch(action.type){
      case 'LISTEN_FOR_EVENT':
        calledListenedForCount++;
        break;
      case 'DISPATCH_UPON_EVENT':
        calledDispatchUponMatchingEventCount++;
        break;
      }
    }
  };

  const m = middleware('LISTEN_FOR_EVENT', 'DISPATCH_UPON_EVENT')(mockStore)(mockNext);

  it('should ignore actions that do not match our event name and do not have a promise payload', () => {

    m({
      type: 'WHATEVER'
    });

    expect(calledListenedForCount).toEqual(0);
    expect(calledDispatchUponMatchingEventCount).toEqual(0);

    m({
      type: 'LISTEN_FOR_EVENT',
      payload: {
        foo: 'bar'
      }
    });

    expect(calledListenedForCount).toEqual(0);
    expect(calledDispatchUponMatchingEventCount).toEqual(0);
  });

  it('should dispatch our action when we match our listen-for-event and the payload is a promise', (done) => {

    const promise = new Promise(function(resolve, reject) {
      resolve('Resolving promise');
    });

    m({
      type: 'LISTEN_FOR_EVENT',
      payload: promise
    });

    promise.then(function(){
      expect(calledDispatchUponMatchingEventCount).toEqual(1);
      done();
    });
  });

});