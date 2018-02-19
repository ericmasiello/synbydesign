import { Router } from 'express';
import {
  portofolioController,
  portofolioDetailController,
  resumeController,
} from '../controllers/apiControllers';

const router = Router();

router.get('/portfolio', portofolioController);
router.get('/portfolio/:id', portofolioDetailController);
router.get('/resume', resumeController);

export default router;
