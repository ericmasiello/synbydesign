// @flow
/* global document */
/* eslint-disable import/extensions */
// $FlowFixMe
import 'synbydesign.design';
/* eslint-enable import/extensions */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './containers/app.container';
import Home from './components/home.component';
import PortfolioDetail from './containers/portfolio-detail.container';
import ChangeLog from './containers/change-log.container';
import NotFound from './components/not-found.component';
import store from './createStore';
import sayHi from './test-flow';

sayHi('Syn By Design');

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home} />
        <Route path="/detail/:id" component={PortfolioDetail} />
        <Route path="/changelog" component={ChangeLog} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
