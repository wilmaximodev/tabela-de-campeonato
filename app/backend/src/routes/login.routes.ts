import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import Validation from '../middleware/Validations';

const userController = new UserController();

const router = Router();

router.post('/', Validation.inputLogin, (req: Request, res: Response) => userController
  .login(req, res));

export default router;
