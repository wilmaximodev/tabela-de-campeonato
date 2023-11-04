import ITeam from './ITeam';

export default interface ITeamModel {
  findAll(): Promise<ITeam[]>,
}
