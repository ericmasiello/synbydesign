export default (listenForActionType, dispatchActionUponLoadedType) => store => next => action => {

  if( action.type === listenForActionType && action.payload && typeof action.payload.then == 'function'){

    action.payload.then(function(){

      store.dispatch({
        type: dispatchActionUponLoadedType
      });
    });
  }

  return next(action);
};