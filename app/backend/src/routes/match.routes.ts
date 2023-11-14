import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchController = new MatchController();
const router = Router();

router.get('/', (req, res) => matchController.getAllMatches(req, res));

export default router;
