/* @flow */
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import Promise from 'bluebird';
import winston from 'winston';
// import AppContainer from '../../app/App'; // FIXME - need to load routes (index.js)
import initStore from '../../store';
import routes from '../../routes';

import portfolioService from '../services/portfolio';
import aboutService from '../services/about';

const ctrl = {};

ctrl.index = (req: express$Request, res: express$Response) => {
  Promise.all([
    portfolioService.fetchAll(),
    aboutService.fetch(),
  ])
  .spread((portfolio, about) => {
    winston.log('Controller Index response portfolio:', portfolio);
    winston.log('Controller Index response about:', about);

    // routes is our object of React routes defined above
    match({
      routes,
      location: req.url,
    }, (err, redirectLocation, props) => {
      // winston.info(props);
      if (err) {
        winston.error(err);
        // something went badly wrong, so 500 with a message
        res.status(500).send(err.message);
      } else if (redirectLocation) {
        // we matched a ReactRouter redirect, so redirect from the server
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (props) {
        const store = initStore({
          portfolio,
          about,
        });

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
      } else {
        // no route match, so 404. In a real app you might render a custom
        // 404 view here
        res.sendStatus(404);
      }
    });
  })
  .catch((err) => {
    winston.error(err);
    throw new Error(err);
  });
};

export default ctrl;
