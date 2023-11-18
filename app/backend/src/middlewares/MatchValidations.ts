import { Request, Response, NextFunction } from 'express';
import TeamService from '../services/TeamService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchValidation {
  constructor(
    private teamService = new TeamService(),
  ) { }

  static validateMatch(req: Request, res: Response, next: NextFunction) {
    const { homeTeamId, awayTeamId } = req.body;
    if (!homeTeamId || !awayTeamId) {
      return res.status(mapStatusHTTP('inputError'))
        .json({ message: 'Missing corrects parameters' });
    }
    if (homeTeamId === awayTeamId) {
      return res.status(mapStatusHTTP('inputError'))
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    return next();
  }
}
