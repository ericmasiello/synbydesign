'use strict';
export default (beginPromiseAction, completePromiseAction) => store => next => action => { //eslint-disable-line strict

  if( action.payload && typeof action.payload.then == 'function') {

    store.dispatch({
      type: beginPromiseAction
    });

    action.payload.then(() => {
      store.dispatch({
        type: completePromiseAction
      });
    }).catch(() => {
      store.dispatch({
        type: completePromiseAction
      });
    });
  }

  return next(action);
};
