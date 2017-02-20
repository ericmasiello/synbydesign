/* @flow */
import winston from 'winston';
import aboutService from '../../services/about';

const ctrl = {
  index(req: express$Request, res: express$Response) {
    aboutService.fetch().then((about) => {
      winston.log('Got to about API', about);
      res.json(about);
    });
  },
};

export default ctrl;
