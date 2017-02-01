/* @flow */
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from '../app';
import initStore from '../store';

import portfolioService from '../app/portfolio';

const ctrl = {};

ctrl.index = (req: express$Request, res: express$Response) => {
  portfolioService.fetchAll()
    .then((portfolio) => {
      const store = initStore({
        portfolio,
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
    });
};

export default ctrl;
