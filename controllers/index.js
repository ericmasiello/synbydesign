/* @flow */
import request from 'request';
import { SYN_BY_DESIGN_ROUTE } from '../config';

const ctrl = {};

ctrl.index = (req: express$Request, res: express$Response) => {
  request.get(`${SYN_BY_DESIGN_ROUTE}/data.json`, (err, resp, body) => {
    res.render('index', {
      data: JSON.parse(body),
    });
  });
};

export default ctrl;
