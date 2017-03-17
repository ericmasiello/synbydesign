/* @flow */
import winston from 'winston';
import Promise from 'bluebird';
import type {
  Syn$AboutService,
} from '../../../../types';
import aboutData from '../../../data/about.json';

const service: Syn$AboutService = {
  fetch() {
    winston.info('Requesting data from about service');
    return Promise
      .resolve(aboutData)
      .catch((err) => {
        winston.error(err);
        throw new Error(err);
      });
  },
};

export default service;
