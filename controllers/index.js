/* @flow */
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import Promise from 'bluebird';
import winston from 'winston';
import AppContainer from '../app';
import initStore from '../store';

import portfolioService from '../app/portfolio';
import aboutService from '../app/about';

const ctrl = {};

ctrl.index = (req: express$Request, res: express$Response) => {
  Promise.all([
    portfolioService.fetchAll(),
    aboutService.fetch(),
  ])
  .spread((portfolio, about) => {
    winston.info('Controller Index response', portfolio, about);
    const store = initStore({
      portfolio,
      about,
    });

    const html = renderToString((
      <Provider store={store}>
        <AppContainer />
      </Provider>
    ));

    res.render('index', {
      html,
      data: store.getState(),
    });
  })
  .catch((err) => {
    winston.error(err);
    throw new Error(err);
  });
};

export default ctrl;
