import TeamModel from '../models/TeamModel';
import ITeam from '../interfaces/teams/ITeam';
import ITeamModel from '../interfaces/teams/ITeamModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class TeamService {
  constructor(
    private teamModel: ITeamModel = new TeamModel(),
  ) { }

  public async getAllTeams(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'successful', data: allTeams };
  }
}
