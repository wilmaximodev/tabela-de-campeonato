import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import LoginValidation from '../middleware/LoginValidation';
import TokenValidation from '../middleware/TokenValidation';

const userController = new UserController();

const router = Router();

router.post('/', LoginValidation.inputLogin, (req: Request, res: Response) => userController
  .login(req, res));

router.get(
  '/role',
  TokenValidation.verifyToken,
  (req: Request, res: Response) => userController.getRole(req, res),
);

export default router;
