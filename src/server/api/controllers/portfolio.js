/* @flow */
import winston from 'winston';
import portfolioService from '../../services/portfolio';

const ctrl = {
  index(req: express$Request, res: express$Response) {
    winston.log('PortfolioCtrl#index');
    portfolioService.fetchAll().then((portfolio) => {
      winston.log('Response from portfolio service index', portfolio);
      res.json(portfolio);
    });
  },
  detail(req: express$Request, res: express$Response) {
    winston.log('PortfolioCtrl#detail', req.params.id);
    portfolioService.fetchById(req.params.id).then((portfolioItem) => {
      winston.log('Response from portfolio service detail', portfolioItem);
      res.json(portfolioItem);
    });
  },
};

export default ctrl;
