/* eslint-disable max-len */
const promiseDispatcherMiddleware = (beginPromiseAction, completePromiseAction) => store => next => (action) => {
  /* eslint-enable max-len */
  if (action.payload && typeof action.payload.then === 'function') {
    store.dispatch({
      type: beginPromiseAction,
    });

    action.payload.then(() => {
      store.dispatch({
        type: completePromiseAction,
      });
    }).catch(() => {
      store.dispatch({
        type: completePromiseAction,
      });
    });
  }

  return next(action);
};

export default promiseDispatcherMiddleware;
