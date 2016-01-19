import expect from 'expect';
import middleware from './promise-dispatcher.middleware';

describe('Promise Dispatcher Middleware', () => {

  let calledBeginCount = 0;
  let calledEndCount = 0;

  const mockNext = function(action){};

  const mockStore = {
    dispatch(action){
      switch(action.type){
      case 'BEGIN':
        calledBeginCount++;
        break;
      case 'END':
        calledEndCount++;
        break;
      }
    }
  };

  const m = middleware('BEGIN', 'END')(mockStore)(mockNext);

  it('should ignore actions without promises as payloads', () => {

    m({
      type: 'WHATEVER'
    });

    expect(calledBeginCount).toEqual(0);
    expect(calledEndCount).toEqual(0);

    m({
      type: 'WHATEVER',
      payload: {
        foo: 'bar'
      }
    });

    expect(calledBeginCount).toEqual(0);
    expect(calledEndCount).toEqual(0);
  });

  it('should send actions when a promises is the payload', (done) => {

    const promise = new Promise(function(resolve, reject) {
      resolve("Resolving promise");
    });

    m({
      type: 'SOMETHING_WITH_A_PROMISE',
      payload: promise
    });

    expect(calledBeginCount).toEqual(1);
    expect(calledEndCount).toEqual(0);

    promise.then(function(){
      expect(calledEndCount).toEqual(1);
      done();
    });
  });

});