/* @flow */
import req from 'request';
import Promise from 'bluebird';
import { SYN_BY_DESIGN_ROUTE } from '../config';

const request = Promise.promisify(req);

function fetchAll() {
  return request(`${SYN_BY_DESIGN_ROUTE}/portfolio.json`)
    .then(({ body }) => JSON.parse(body))
    .catch((err) => {
      throw new Error(err);
    });
}

export default fetchAll;
