/* @flow */
import req from 'request';
import Promise from 'bluebird';
import winston from 'winston';
import { SYN_BY_DESIGN_ROUTE } from '../../../config';

const request = Promise.promisify(req);

const service = {};

service.fetchAll = function fetchAll() {
  const url = `${SYN_BY_DESIGN_ROUTE}/portfolio.json`;
  winston.info(`Requesting ${url}`);
  return request(url)
    .then(({ body }) => {
      winston.info(`Response from ${url}`, body);
      return JSON.parse(body);
    })
    .catch((err) => {
      winston.error(err);
      throw new Error(err);
    });
};

export default service;
