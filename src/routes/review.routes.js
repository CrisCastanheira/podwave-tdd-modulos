import { Router } from 'express';
import { createReview } from '../modules/review/review.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/episodes/:episodeId/reviews', requireAuth, createReview);

export default router;
