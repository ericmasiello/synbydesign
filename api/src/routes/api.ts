import { Router } from 'express';
import {
  portofolioController,
  portofolioDetailController,
  resumeController,
} from '../controllers/apiControllers';
import {
  likeController,
  unlikeController,
} from '../controllers/likeControllers';

const router = Router();

router.get('/portfolio', portofolioController);
router.get('/portfolio/:id', portofolioDetailController);
router.get('/resume', resumeController);
router.post('/like/:id', likeController);
router.delete('/like/:id', unlikeController);

export default router;
