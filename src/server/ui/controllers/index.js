/* @flow */
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import Promise from 'bluebird';
import winston from 'winston';
import initStore from '../../../store';
import routes from '../../../ui-routes';

import portfolioService from '../../services/portfolio';
import aboutService from '../../services/about';
import type {
  Syn$About,
  Syn$Portfolio,
  Syn$RootState,
} from '../../../../types';

function renderUIWithStoreData(
  res: express$Response,
  props: Object,
  storeData: Syn$RootState): void {
  const store = initStore(storeData);

  // if we got props, that means we found a valid component to render
  // for the given route
  const html = renderToString(
    <Provider store={store}>
      <RouterContext {...props} />
    </Provider>,
  );
  // render `index.ejs`, but pass in the markup we want it to display
  res.render('index', {
    html,
    data: store.getState(),
  });
}

const ctrl = {};

ctrl.detail = (req: express$Request, res: express$Response, props: Object) => {
  portfolioService.fetchById(props.params.id)
    .then((portfolioItem: ?Syn$Portfolio) => {
      winston.log('Controller detail response portfolioItem:', props.params.id, portfolioItem);

      renderUIWithStoreData(res, props, {
        selectedPortfolioId: props.params.id,
        portfolio: portfolioItem ? [portfolioItem] : [],
      });
    })
    .catch((err) => {
      winston.error(err);
      throw new Error(err);
    });
};

ctrl.index = (req: express$Request, res: express$Response, props: Object) => {
  Promise.all([
    portfolioService.fetchAll(),
    aboutService.fetch(),
  ])
  .spread((portfolio: Syn$Portfolio[], about: Syn$About) => {
    winston.log('Controller Index response portfolio:', portfolio);
    winston.log('Controller Index response about:', about);

    renderUIWithStoreData(res, props, {
      portfolio,
      about: about.content,
    });
  })
  .catch((err) => {
    winston.error(err);
    throw new Error(err);
  });
};

ctrl.all = (req: express$Request, res: express$Response) => {
  winston.log('Loading all');
  // routes is our object of React routes defined above
  match({
    routes,
    location: req.url,
  }, (err, redirectLocation, props) => {
    if (err) {
      winston.error(err);
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const currentPath = props.routes[1].path;
      switch (currentPath) {
        case '/detail/:id':
          winston.log('loading detail...');
          ctrl.detail(req, res, props);
          break;
        default:
          winston.log('loading home...');
          ctrl.index(req, res, props);
          break;
      }
    } else {
      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
};

export default ctrl;
