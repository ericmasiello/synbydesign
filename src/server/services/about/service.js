/* @flow */
// import req from 'request';
// import Promise from 'bluebird';
import winston from 'winston';
import { SYN_BY_DESIGN_ROUTE } from '../../../config';
import type {
  AboutService,
} from '../../../../types';

import aboutData from '../../../data/about';

// const request = Promise.promisify(req);

import request from './req';

const service: AboutService = {
  fetch() {
    // const url = `${SYN_BY_DESIGN_ROUTE}/about.json`;
    console.log(`Requesting ${url}`);
    winston.info(`Requesting ${url}`);
    Promise.resolve(aboutData);
    // return request.fetch(url)
    //   .then(({ body }) => {
    //     console.log('The body =', body);
    //     return JSON.parse(body);
    //   })
    //   .catch((err) => {
    //     winston.error(err);
    //     throw new Error(err);
    //   });
  },
};

export default service;
