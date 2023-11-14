import { Router } from 'express';
import MatchController from '../controllers/MatchController';
import Token from '../middlewares/TokenValidation';

const matchController = new MatchController();
const router = Router();

router.get('/', (req, res) => matchController.getAllMatches(req, res));
router.patch('/:id/finish', Token.verifyToken, (req, res) => matchController.finishMatch(req, res));
router.patch('/:id', Token.verifyToken, (req, res) => matchController.updatePlacar(req, res));
router.post('/', Token.verifyToken, (req, res) => matchController.createMatch(req, res));

export default router;
