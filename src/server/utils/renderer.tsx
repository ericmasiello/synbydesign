import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import * as serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import { Request } from 'express';
import { Store } from 'redux';
import { ServerStyleSheet } from 'styled-components';
import Routes from '../../client/Routes';
import logger from '../utils/logger';

export default (req: Request, store: Store<AppState>, context: object) => {

  logger.info('Calling renderer with path:', req.baseUrl, 'and context:', context);

  const app = (
    <Provider store={store}>
      <StaticRouter location={req.baseUrl} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(app));
  const styleTags = sheet.getStyleTags();
  const helmet = Helmet.renderStatic();

  return {
    head: [
      helmet.title.toString().trim(),
      helmet.meta.toString().trim(),
      styleTags,
    ].join('\n'),
    html,
    state: serialize(store.getState()),
  };
};
