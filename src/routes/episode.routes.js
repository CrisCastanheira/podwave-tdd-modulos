import { Router } from 'express';
import { listEpisodes, createEpisode } from '../modules/episode/episode.controller.js';
import { requireAdmin } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/episodes', listEpisodes);
router.post('/episodes', requireAdmin, createEpisode);

export default router;
