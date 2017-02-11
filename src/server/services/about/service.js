/* @flow */
import req from 'request';
import Promise from 'bluebird';
import winston from 'winston';
import { SYN_BY_DESIGN_ROUTE } from '../../../config';
import type { AboutService } from '../../../../types';

const request = Promise.promisify(req);

const service: AboutService = {
  fetch() {
    const url = `${SYN_BY_DESIGN_ROUTE}/about.json`;
    winston.info(`Requesting ${url}`);
    return request(url)
      .then(({ body }) => JSON.parse(body))
      .catch((err) => {
        winston.error(err);
        throw new Error(err);
      });
  },
};

export default service;
