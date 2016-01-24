export default (beginPromiseAction, completePromiseAction) => store => next => action => { //eslint-disable-line strict
  'use strict';

  if( action.payload && typeof action.payload.then == 'function'){

    store.dispatch({
      type: beginPromiseAction
    });

    action.payload.then(function(){
      store.dispatch({
        type: completePromiseAction
      });
    });
  }

  return next(action);
};