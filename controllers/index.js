/* @flow */
import { renderToString } from 'react-dom/server';
import React from 'react';
import Test from '../client/test';

import fetchAll from '../services/portfolio';

const ctrl = {};

ctrl.index = (req: express$Request, res: express$Response) => {
  fetchAll()
    .then((portfolio) => {
      const html = renderToString(<Test />);
      res.render('index', {
        html,
        data: portfolio,
      });
    });
};

export default ctrl;
