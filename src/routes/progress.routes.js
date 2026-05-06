import { Router } from 'express';
import { saveProgress } from '../modules/progress/progress.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/episodes/:episodeId/progress', requireAuth, saveProgress);

export default router;
