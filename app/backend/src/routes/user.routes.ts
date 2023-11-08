import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

router.post('/login', (req: Request, res: Response) => userController.login(req, res));

export default router;
