import { QueryTypes } from 'sequelize';
import Sequelize from '../database/models';
import ILeaderboard from '../Interfaces/leaderboard/ILeaderboard';
import createQuery from '../utils/Query';

export default class LeaderboardModel {
  private model = Sequelize;

  async homeTeamsClassification(): Promise<ILeaderboard[]> {
    const result = await this.model.query(createQuery('home'), {
      type: QueryTypes.SELECT,
    }) as ILeaderboard[];
    const Teams = await result.map((te) => ({
      name: te.name,
      totalPoints: Number(te.totalPoints),
      totalGames: Number(te.totalGames),
      totalVictories: Number(te.totalVictories),
      totalDraws: Number(te.totalDraws),
      totalLosses: Number(te.totalLosses),
      goalsFavor: Number(te.goalsFavor),
      goalsOwn: Number(te.goalsOwn),
      goalsBalance: Number(te.goalsBalance),
      efficiency: te.efficiency,
    }));
    return Teams;
  }
}
