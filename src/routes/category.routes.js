import { Router } from 'express';
import { listCategories, createCategory } from '../modules/category/category.controller.js';
import { requireAdmin } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/categories', listCategories);
router.post('/categories', requireAdmin, createCategory);

export default router;
