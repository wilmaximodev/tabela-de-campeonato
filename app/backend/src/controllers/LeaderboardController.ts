import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) { }

  public async getHomeTeamsClassification(req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.getHomeTeamsClassification();
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
