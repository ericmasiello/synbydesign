/* @flow */
import express from 'express';
import aboutCtrl from './controllers/about';

const router: express$Router = express.Router();

router.get('/about', aboutCtrl.index);

module.exports = router;
