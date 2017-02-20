/* @flow */
import express from 'express';
import ctrl from './controllers';

const router: express$Router = express.Router();

router.get('*', ctrl.all);

module.exports = router;
