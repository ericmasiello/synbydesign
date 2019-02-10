// Startup point for the client side application
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Loadable from 'react-loadable';
import axios from 'axios';
import * as Sentry from '@sentry/browser';
import * as LogRocket from 'logrocket';
// @ts-ignore
import * as runtime from 'serviceworker-webpack-plugin/lib/runtime';
import createStore from '../utils/createStore';
import Chrome from './Chrome';
import Home from './pages/HomePage';
import Loading from './components/Loading';

LogRocket.init('nzurcg/syn-by-design-client-dev');

Sentry.init({
  dsn: process.env.SENTRY_CLIENT_DSN,
});

Sentry.configureScope(scope => {
  scope.addEventProcessor(async event => {
    if (event && event.extra) {
      event.extra.sessionURL = LogRocket.sessionURL;
    }
    return event;
  });
});

const HomePage = Home.component;

const loadableConfig = {
  timeout: 10000,
  delay: 300,
  loading: Loading,
};

const PortfolioDetailPage = Loadable({
  loader: () =>
    import('./pages/PortfolioDetailPage').then(
      ({ default: Page }) => Page.component,
    ),
  ...loadableConfig,
});

const NotFoundPage = Loadable({
  loader: () =>
    import('./pages/NotFoundPage').then(({ default: Page }) => Page.component),
  ...loadableConfig,
});

if (process.env.INCLUDE_SW) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', event => {
      Sentry.captureException(event.data.error);
    });

    runtime.register();
  }
}

const axiosInstance = axios.create({
  baseURL: '/api',
});

export const store = createStore(
  axiosInstance,
  (window as AppWindow).INITIAL_STATE,
  (window as AppWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
);

export const client = (
  <Provider store={store}>
    <BrowserRouter>
      <Route
        path="/"
        render={props => (
          <Chrome {...props}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/portfolio/:id" component={PortfolioDetailPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Chrome>
        )}
      />
    </BrowserRouter>
  </Provider>
);

const root = document.getElementById('root');

if (root) {
  ReactDOM.hydrate(client, root);
}
