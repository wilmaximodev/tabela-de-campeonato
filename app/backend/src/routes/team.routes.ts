import { Request, Router, Response } from 'express';
import TeamController from '../controllers/TeamController';

const bookController = new TeamController();

const router = Router();

router.get('/', (req: Request, res: Response) => bookController.getAllTeams(req, res));

export default router;
