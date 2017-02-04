/* @flow */
import express from 'express';
import ctrl from '../controllers';

const router: express$Router = express.Router();

router.get('*', ctrl.index);

module.exports = router;
