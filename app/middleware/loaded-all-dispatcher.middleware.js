/* eslint-disable max-len */
 const loadedAllDispatcherMiddleware = (listenForActionType, dispatchActionUponLoadedType) => store => next => (action) => {
   /* eslint-enable max-len */
   if (action.type === listenForActionType && action.payload && typeof action.payload.then === 'function') {
     action.payload.then(() => {
       store.dispatch({
         type: dispatchActionUponLoadedType,
       });
     });
   }

   return next(action);
 };

 export default loadedAllDispatcherMiddleware;
