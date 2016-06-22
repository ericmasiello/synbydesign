'use strict';
export default (listenForActionType, dispatchActionUponLoadedType) => store => next => action => { //eslint-disable-line strict

  if( action.type === listenForActionType && action.payload && typeof action.payload.then == 'function'){

    action.payload.then(() =>{

      store.dispatch({
        type: dispatchActionUponLoadedType
      });
    });
  }

  return next(action);
};
