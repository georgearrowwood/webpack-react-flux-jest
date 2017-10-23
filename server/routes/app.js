import express from 'express';

import app from '../controllers/app';
import auth from '../controllers/auth';

const router = express.Router();

router.get('/products', auth.authApp('user'), app.init);
router.get('*', app.init);

export default router;
