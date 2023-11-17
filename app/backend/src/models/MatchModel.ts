import sequelizeMatch from '../database/models/SequelizeMatch';
import SequelizeTeam from '../database/models/SequelizeTeam';
import IMatch from '../Interfaces/matches/IMatch';
import IMatchModel from '../Interfaces/matches/IMatchModel';
import { NewPlacar } from '../types/NewPlacar';
import { NewMatch } from '../types/NewMatch';

export default class MatchModel implements IMatchModel {
  private model = sequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const matches = await this.model.findAll({
      include: [
        {
          model: SequelizeTeam,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: SequelizeTeam,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });

    return matches;
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

  async create(data: NewMatch): Promise<IMatch | void> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = data;
    const validHomeTeam = await SequelizeTeam.findByPk(homeTeamId);
    const validAwayTeam = await SequelizeTeam.findByPk(awayTeamId);

    if (!validHomeTeam || !validAwayTeam) return;

    const dbData = await this.model
      .create({
        homeTeamId,
        awayTeamId,
        homeTeamGoals,
        awayTeamGoals,
        inProgress: true });
    return dbData;
  }
}
