import { Router } from 'express';
import UserController from '../controllers/UserController';
import LoginValidation from '../middlewares/LoginValidation';
import TokenValidation from '../middlewares/TokenValidation';

const userController = new UserController();

const router = Router();

router.post('/', LoginValidation.inputLogin, (req, res) => userController
  .login(req, res));

router.get(
  '/role',
  TokenValidation.verifyToken,
  (req, res) => userController.getRole(req, res),
);

export default router;
