/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import initializeStore from './store';
import routes from './routes';

/* eslint-disable no-underscore-dangle */
const store = initializeStore(window.__PRELOADED_DATA__);
/* eslint-enable no-underscore-dangle */

render((
  <Provider store={store}>
    <Router
      routes={routes}
      history={browserHistory}
    />
  </Provider>
), document.getElementById('app'));
