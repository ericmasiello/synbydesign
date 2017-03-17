/* @flow */
import Promise from 'bluebird';
import winston from 'winston';
import { filter, head } from 'lodash';
import type {
  Syn$PortfolioService,
  Syn$LoadPortfolio,
} from '../../../../types';
import getPortfolioId from '../../../util/portfolio';
import portfolioData from '../../../data/portfolio.json';

const loadPortfolio: Syn$LoadPortfolio = () => {
  winston.info('Requesting data from portfolio service');
  return Promise
    .resolve(portfolioData)
    .catch((err) => {
      winston.error(err);
      throw new Error(err);
    });
};

const service: Syn$PortfolioService = {
  fetchAll() {
    winston.info('PortfolioService#fetchAll');
    return loadPortfolio();
  },
  fetchById(id: string) {
    winston.info('PortfolioService#fetchById', id);
    return loadPortfolio().then((portfolioList) => {
      // filter by title
      winston.log(`filtering by ${id} on list`, portfolioList);
      return head(filter(portfolioList, portfolio => id === getPortfolioId(portfolio)));
    });
  },
};

export default service;
