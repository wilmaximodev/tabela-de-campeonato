import { Router } from 'express';
import teamRouter from './team.routes';
import userRouter from './user.routes';
import matchRouter from './match.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/login', userRouter);
router.use('/matches', matchRouter);

export default router;
