import ITeam from './ITeam';

export default interface ITeamModel {
  findAll(): Promise<ITeam[]>,
  findByPk(id: number): Promise<ITeam | null>,
}
