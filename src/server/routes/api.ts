import { Router } from 'express';
import {
  proxyController,
  portofolioController,
  portofolioDetailController,
} from '../controllers/apiControllers';

const router = Router();

router.get('/portfolio', portofolioController);
router.get('/portfolio/:id', portofolioDetailController);

router.get('*', proxyController);

export default router;
