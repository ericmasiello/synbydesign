import 'synbydesign.design';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app.component';
import reducers from './reducers';

/*
 * middleware intercepts actions emitted from action creators before
 * the reach reducers
 * they allow you to block, modify, or pass through actions before
 * they hit the reducer
 * they act as a gatekeeper between action creators and reducers
 */
const store = applyMiddleware(ReduxPromise)(createStore)(reducers);

// FIXME: remove this - this is just for testing
window.syn_store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));

/*

 Events in the application (e.g. user clicks something, page loads for the first time, etc)
 call Action Creators.

 Action Creators are simple functions that return Actions
 Actions are just objects that have a 'type' property e.g.
 {
 type: 'THE_ACTION_TO_PERFORM'
 }
 Actions can also contain other metadata properties e.g.
 {
 type: 'BOOK_SELECTED',
 book: {
 id: 48,
 title: 'Book title'
 }
 }

 Actions are sent automatically to ALL reducers in the application

 Reducers can choose to return a different piece of state depending on the Action
 This newly returned state gets piped backed into our [Redux] applicaiton state which,
 in turn, gets piped back into our Container views causing them
 to re-render based on the newly updated redux app state

 */