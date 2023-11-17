import { Request, Response, NextFunction } from 'express';
import TeamService from '../services/TeamService';

export default class MatchValidation {
  constructor(
    private teamService = new TeamService(),
  ) { }

  static validateMatch(req: Request, res: Response, next: NextFunction) {
    const { homeTeamId, awayTeamId } = req.body;
    if (!homeTeamId || !awayTeamId) {
      return res.status(422).json({ message: 'Missing corrects parameters' });
    }
    if (homeTeamId === awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    return next();
  }
}
