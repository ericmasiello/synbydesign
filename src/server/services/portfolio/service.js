/* @flow */
import req from 'request';
import Promise from 'bluebird';
import winston from 'winston';
import { filter, head } from 'lodash';
import { SYN_BY_DESIGN_ROUTE } from '../../../config';
import type {
  PortfolioService,
  LoadPortfolio,
} from '../../../../types';
import getPortfolioId from '../../../util/portfolio';

const request = Promise.promisify(req);

const loadPortfolio: LoadPortfolio = () => {
  const url = `${SYN_BY_DESIGN_ROUTE}/portfolio.json`;
  winston.info(`Requesting ${url}`);
  return request(url)
    .then(({ body }) => JSON.parse(body))
    .catch((err) => {
      winston.error(err);
      throw new Error(err);
    });
};

const service: PortfolioService = {
  fetchAll() {
    return loadPortfolio();
  },
  fetchById(id) {
    return loadPortfolio().then((portfolioList) => {
      // filter by title
      winston.log(`filtering by ${id} on list`, portfolioList);
      return head(filter(portfolioList, portfolio => id === getPortfolioId(portfolio.title)));
    });
  },
};

export default service;
