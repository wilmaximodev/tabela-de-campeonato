import { QueryTypes } from 'sequelize';
import Sequelize from '../database/models';
import ILeaderboard from '../Interfaces/leaderboard/ILeaderboard';
import createQuery from '../utils/Query';
import mapTeams from '../utils/mapTeams';

export default class LeaderboardModel {
  private model = Sequelize;

  async homeTeamsClassification(): Promise<ILeaderboard[]> {
    const homeTeams = await this.model.query(createQuery('home'), {
      type: QueryTypes.SELECT,
    }) as ILeaderboard[];
    return mapTeams(homeTeams);
  }

  async awayTeamsClassification(): Promise<ILeaderboard[]> {
    const awayTeams = await this.model.query(createQuery('away'), {
      type: QueryTypes.SELECT,
    }) as ILeaderboard[];
    return mapTeams(awayTeams);
  }

  async generalClassification(): Promise<ILeaderboard[]> {
    const allTeams = await this.model.query(createQuery('all'), {
      type: QueryTypes.SELECT,
    }) as ILeaderboard[];
    return mapTeams(allTeams);
  }
}
