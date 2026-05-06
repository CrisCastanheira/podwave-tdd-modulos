import { Router } from 'express';
import { listPodcasts, createPodcast } from '../modules/podcast/podcast.controller.js';
import { requireAdmin } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/podcasts', listPodcasts);
router.post('/podcasts', requireAdmin, createPodcast);

export default router;
