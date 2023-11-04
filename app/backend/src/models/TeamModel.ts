import SequelizeTeam from '../database/models/SequelizeTeam';
import ITeam from '../interfaces/teams/ITeam';
import ITeamModel from '../interfaces/teams/ITeamModel';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;

  async findAll(): Promise<ITeam[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }
}
