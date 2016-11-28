import { compose, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import createLogger from 'redux-logger';
import devTools from 'remote-redux-devtools';
import { createMockMiddleware } from 'redux-promise-mock';

import reducers from './reducers';
import promiseDispatcherMiddleware from './middleware/promise-dispatcher.middleware';
import loadedAllDispatcherMiddleware from './middleware/loaded-all-dispatcher.middleware';


import {
  REQUEST_DATA,
  RECEIVED_DATA,
  LOAD_PORTFOLIO_ALL,
  LOADED_ALL_PORTFOLIO,
} from './actions/types';

import mockChangeLogData from './test-data/change-log.mock';
import mockDesign from './test-data/portfolio-design.mock';
import mockOther from './test-data/portfolio-other.mock';
import mockWeb from './test-data/portfolio-web.mock';
import mockAbout from './test-data/about.mock';

const isDevMode = () => process.env.NODE_ENV === 'development';

const logger = createLogger();

const mockData = createMockMiddleware({
  LOAD_CHANGE_LOG: mockChangeLogData,
  LOAD_PORTFOLIO_ALL: [...mockDesign, ...mockOther, ...mockWeb],
  LOAD_ABOUT_CONTENT: mockAbout,
  LOAD_PORTFOLIO_DETAIL: {
    data: mockWeb[0],
    substitutePropsFromUrl: {
      ID: /\d+$/,
    },
  },
});

let middleware = [];

if (isDevMode()) {
  middleware.push(logger);
}

middleware = [
  ...middleware,
  promiseDispatcherMiddleware(REQUEST_DATA, RECEIVED_DATA),
  loadedAllDispatcherMiddleware(LOAD_PORTFOLIO_ALL, LOADED_ALL_PORTFOLIO),
  ReduxPromise,
];

if (isDevMode()) {
  middleware.push(mockData);
}

const enhancer = compose(
  applyMiddleware(...middleware),
  devTools(),
);

export default createStore(
  reducers, {
    appLoading: {
      activeRequests: 0,
      loadedRequests: 0,
    },
    aboutContent: '',
    loadedAboutContent: false,
    portfolio: [],
    loadedAllItems: false,
    changeLog: [],
    loadedChangeLog: false,
  },
  enhancer,
);
