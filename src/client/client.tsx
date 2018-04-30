// Startup point for the client side application
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
// @ts-ignore
import * as runtime from 'serviceworker-webpack-plugin/lib/runtime';
import Routes from './Routes';
import createStore from '../utils/createStore';
import OfflinePage from './pages/OfflinePage';

if ('serviceWorker' in navigator) {
  runtime.register();
}

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  axiosInstance,
  (window as AppWindow).INITIAL_STATE,
  (window as AppWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
);

export const client = (
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>
);

const root = document.getElementById('root');
const offlineRoot = document.getElementById('offline-root');

if (root) {
  ReactDOM.hydrate(client, root);
} else if (offlineRoot) {
  ReactDOM.render(<OfflinePage />, offlineRoot);
}
