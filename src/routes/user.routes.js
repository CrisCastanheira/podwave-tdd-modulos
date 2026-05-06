import { Router } from 'express';
import { showRegister, register } from '../modules/user/user.controller.js';

const router = Router();

router.get('/register', showRegister);
router.post('/register', register);

export default router;
