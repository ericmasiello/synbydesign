import * as React from 'react';
import { Store } from 'redux';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { RouteConfig } from 'react-router-config';

export interface RouteConfigWithLoadData extends RouteConfig {
  component: React.ComponentType<any>;
  loadData?: (store: Store<any>) => Promise<any>;
  routes?: RouteConfigWithLoadData[];
}

const Routes: RouteConfigWithLoadData[] = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      // {
      //   ...UsersListPage,
      //   path: '/users',
      // },
      {
        ...NotFoundPage,
      },
    ],
  },
];

export default Routes;
