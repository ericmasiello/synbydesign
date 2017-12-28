import { Router } from 'express';
import {
  portofolioController,
  portofolioDetailController,
} from '../controllers/apiControllers';

const router = Router();

router.get('/portfolio', portofolioController);
router.get('/portfolio/:id', portofolioDetailController);

export default router;
