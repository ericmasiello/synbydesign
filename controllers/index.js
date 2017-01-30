/* @flow */
import request from 'request';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { SYN_BY_DESIGN_ROUTE } from '../config';
import Test from '../client/test';

const ctrl = {};

ctrl.index = (req: express$Request, res: express$Response) => {
  request.get(`${SYN_BY_DESIGN_ROUTE}/data.json`, (err, resp, body) => {
    const html = renderToString(<Test />);
    res.render('index', {
      html,
      data: JSON.parse(body),
    });
  });
};

export default ctrl;
