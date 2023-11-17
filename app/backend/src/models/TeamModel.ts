import SequelizeTeam from '../database/models/SequelizeTeam';
import ITeam from '../Interfaces/teams/ITeam';
import ITeamModel from '../Interfaces/teams/ITeamModel';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;

  async findAll(): Promise<ITeam[]> {
    const teams = await this.model.findAll();
    console.log(teams);
    return teams;
  }

  async findByPk(id: number): Promise<ITeam | null> {
    const team = await this.model.findByPk(id);
    return team;
  }
}
