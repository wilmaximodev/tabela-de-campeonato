import { ServiceResponse } from '../types/ServiceResponse';
import LeaderboardModel from '../models/LeaderboardModel';
import ILeaderboard from '../Interfaces/leaderboard/ILeaderboard';

export default class LeaderboardService {
  constructor(
    private leaderboardModel: LeaderboardModel = new LeaderboardModel(),
  ) { }

  async homeTeamsClassification(): Promise<ServiceResponse<ILeaderboard[]>> {
    const homeTeamsClassification = await this.leaderboardModel.homeTeamsClassification();
    return { status: 'successful', data: homeTeamsClassification };
  }

  async awayTeamsClassification(): Promise<ServiceResponse<ILeaderboard[]>> {
    const awayTeamsClassification = await this.leaderboardModel.awayTeamsClassification();
    return { status: 'successful', data: awayTeamsClassification };
  }

  async generalClassification(): Promise<ServiceResponse<ILeaderboard[]>> {
    const classification = await this.leaderboardModel.generalClassification();
    return { status: 'successful', data: classification };
  }
}
