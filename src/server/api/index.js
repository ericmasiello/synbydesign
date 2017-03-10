/* @flow */
import express from 'express';
import aboutCtrl from './controllers/about';
import portfolioCtrl from './controllers/portfolio';

const router: express$Router = express.Router();

router.get('/about', aboutCtrl.index);
router.get('/portfolio', portfolioCtrl.index);
router.get('/portfolio/:id', portfolioCtrl.detail);

module.exports = router;
