export default (beginPromiseAction, completePromiseAction) => store => next => action => {

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