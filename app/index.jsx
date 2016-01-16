import 'synbydesign.design';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App.jsx';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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