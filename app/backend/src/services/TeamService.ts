import TeamModel from '../models/TeamModel';
import ITeam from '../interfaces/teams/ITeam';
import ITeamModel from '../interfaces/teams/ITeamModel';
import { ServiceResponse } from '../types/ServiceResponse';

export default class TeamService {
  constructor(
    private teamModel: ITeamModel = new TeamModel(),
  ) { }

  public async getAllTeams(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'successful', data: allTeams };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<ITeam | null>> {
    const team = await this.teamModel.findByPk(id);
    return { status: 'successful', data: team };
  }
}
