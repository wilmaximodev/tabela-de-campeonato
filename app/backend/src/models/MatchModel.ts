import sequelizeMatch from '../database/models/SequelizeMatch';
import IMatch from '../Interfaces/matches/IMatch';
import IMatchModel from '../Interfaces/matches/IMatchModel';
import { NewPlacar } from '../types/NewPlacar';

export default class MatchModel implements IMatchModel {
  private model = sequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }

  async finishByPk(id: number): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id } });
  }

  async updatePlacar(placar: NewPlacar, matchId: number): Promise<void> {
    await this.model.update({
      homeTeamGoals: placar.homeTeamGoals,
      awayTeamGoals: placar.awayTeamGoals,
    }, {
      where: {
        id: matchId,
      },
    });
  }
}
