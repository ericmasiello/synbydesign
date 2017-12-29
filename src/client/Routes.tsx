import * as React from 'react';
import { Store } from 'redux';
import App from './App';
import HomePage from './pages/HomePage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { RouteConfig } from 'react-router-config';

export interface RouteConfigWithLoadData extends RouteConfig {
  component: React.ComponentType<any>;
  loadData?: (store: Store<any>, ...rest: any[]) => Promise<any>;
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
      {
        ...PortfolioDetailPage,
        path: '/portfolio/:id',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];

export default Routes;
