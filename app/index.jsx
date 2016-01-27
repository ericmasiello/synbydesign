import 'synbydesign.design';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import AppContainer from './containers/app.container';
import reducers from './reducers';
import promiseDispatcherMiddleware from './middleware/promise-dispatcher.middleware';
import loadedAllDispatcherMiddleware from './middleware/loaded-all-dispatcher.middleware';
import { REQUEST_DATA, RECEIVED_DATA, LOAD_PORTFOLIO_ALL, LOADED_ALL_PORTFOLIO } from './actions/types';

import { Router, Route, Link, IndexRoute } from 'react-router';
import Home from './components/home.component';
import PortfolioDetail from './containers/portfolio-detail.container';


/*
 * FIXME these need to get moved into synbydesign.design
 */
import './scss/portfolio-image-stack.scss';
import './scss/portfolio.scss';
import './scss/page-loading.scss';
import './scss/screen-reader.scss';

/*
 * middleware intercepts actions emitted from action creators before
 * the reach reducers
 * they allow you to block, modify, or pass through actions before
 * they hit the reducer
 * they act as a gatekeeper between action creators and reducers
 */
const store = applyMiddleware(
  promiseDispatcherMiddleware(REQUEST_DATA, RECEIVED_DATA),
  loadedAllDispatcherMiddleware(LOAD_PORTFOLIO_ALL, LOADED_ALL_PORTFOLIO),
  ReduxPromise)(createStore)(reducers);

// TEMP
const { Component } = React;
class NotFound extends Component {
 render(){
  return <div>Not Found 404</div>;
 }
}

class ChangeLog extends Component {
 render(){
  return <div>This is a changelog that will pull in data Wordpress</div>;
 }
}

//FIXME: remove this
window.store = store;

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