import { Router } from 'express';
import { showDashboard } from '../modules/admin/admin.controller.js';
import { requireAdmin } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/admin/dashboard', requireAdmin, showDashboard);

export default router;
