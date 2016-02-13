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

import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Home from './components/home.component';
import PortfolioDetail from './containers/portfolio-detail.container';
import ChangeLog from './containers/change-log.container';
import NotFound from './components/not-found.component';

const store = applyMiddleware(
  promiseDispatcherMiddleware(REQUEST_DATA, RECEIVED_DATA),
  loadedAllDispatcherMiddleware(LOAD_PORTFOLIO_ALL, LOADED_ALL_PORTFOLIO),
  ReduxPromise)(createStore)(reducers);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home}/>
        <Route path="/detail/:id" component={PortfolioDetail}/>
        <Route path="/changelog" component={ChangeLog}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));