/* @flow */
// import React from 'react';
import AppContainer from './app/App';
import Home from './app/Home';
import Detail from './app/Detail';

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
      component: Detail,
    },
  ],
};

export default routes;
