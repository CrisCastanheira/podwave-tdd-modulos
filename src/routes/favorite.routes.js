import { Router } from 'express';
import { addFavorite } from '../modules/favorite/favorite.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/episodes/:episodeId/favorite', requireAuth, addFavorite);

export default router;
