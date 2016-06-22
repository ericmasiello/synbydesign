'use strict';
import 'synbydesign.design';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/app.container';

import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Home from './components/home.component';
import PortfolioDetail from './containers/portfolio-detail.container';
import ChangeLog from './containers/change-log.container';
import NotFound from './components/not-found.component';
import store from './createStore';

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
