/* @flow */
import winston from 'winston';
import portfolioService from '../../services/portfolio';

const ctrl = {
  index(req: express$Request, res: express$Response) {
    portfolioService.fetchAll().then((portfolio) => {
      winston.log('Got to about API', portfolio);
      res.json(portfolio);
    });
  },
};

export default ctrl;
