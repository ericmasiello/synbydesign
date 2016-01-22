import 'synbydesign.design';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import AppContainer from './containers/app.container';
import reducers from './reducers';
import promiseDispatcherMiddleware from './middleware/promise-dispatcher.middleware';
import { REQUEST_DATA, RECEIVED_DATA } from './actions/types';

import { Router, Route, Link, IndexRoute } from 'react-router'
import Home from './components/home.component';

/*
 * middleware intercepts actions emitted from action creators before
 * the reach reducers
 * they allow you to block, modify, or pass through actions before
 * they hit the reducer
 * they act as a gatekeeper between action creators and reducers
 */
const store = applyMiddleware(promiseDispatcherMiddleware(REQUEST_DATA, RECEIVED_DATA), ReduxPromise)(createStore)(reducers);

// TEMP
const { Component } = React;
class PortfolioDetail extends Component {
 render(){
  return <div>Portfolio Detail</div>
 }
}
class NotFound extends Component {
 render(){
  return <div>Not Found 404</div>
 }
}

class ChangeLog extends Component {
 render(){
  return <div>This is a changelog that will pull in data Wordpress</div>;
 }
}



render(
  <Provider store={store}>
    <Router>
     <Route path="/" component={AppContainer}>
      <IndexRoute component={Home} />
      <Route path="/detail/:id" component={PortfolioDetail} />
      <Route path="/changelog" component={ChangeLog} />
      <Route path="*" component={NotFound}/>
     </Route>
    </Router>
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