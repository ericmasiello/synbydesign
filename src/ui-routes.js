/* @flow */
// import React from 'react';
import AppContainer from './app/App';
import Home from './app/Home';
import { PortfolioDetailContainer } from './app/Portfolio';

const routes = {
  path: '',
  component: AppContainer,
  childRoutes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/detail/:id',
      component: PortfolioDetailContainer,
    },
  ],
};

export default routes;
