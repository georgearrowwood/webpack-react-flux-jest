import express from 'express';
import validation, { rule } from 'express-joi-params';

import authController from '../controllers/auth';

const router = express.Router();

router.post('/api/login', validation.validateRequest({
  body: {
    login: rule.string().required(),
    password: rule.string().required(),
  },
}), authController.login);

export default router;
