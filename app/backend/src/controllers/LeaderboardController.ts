import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) { }

  public async getHomeTeamsClassification(req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.homeTeamsClassification();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getAwayTeamsClassification(req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.awayTeamsClassification();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getGeneralClassification(req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.generalClassification();
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
