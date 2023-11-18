import { ServiceResponse } from '../types/ServiceResponse';
import LeaderboardModel from '../models/LeaderboardModel';
import ILeaderboard from '../Interfaces/leaderboard/ILeaderboard';

export default class LeaderboardService {
  constructor(
    private leaderboardModel: LeaderboardModel = new LeaderboardModel(),
  ) { }

  async getHomeTeamsClassification(): Promise<ServiceResponse<ILeaderboard[]>> {
    const homeTeamsClassification = await this.leaderboardModel.homeTeamsClassification();
    return { status: 'successful', data: homeTeamsClassification };
  }
}
