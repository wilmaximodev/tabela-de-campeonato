import MatchModel from '../models/MatchModel';
import IMatch from '../Interfaces/matches/IMatch';
import IMatchModel from '../Interfaces/matches/IMatchModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { InProgressType } from '../types/InProgress';
import { NewPlacar } from '../types/NewPlacar';
import { NewMatch } from '../types/NewMatch';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
  ) { }

  public async getAllMatches(progress: InProgressType): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.matchModel.findAll();
    const actualProgress = progress.inProgress;

    if (!actualProgress) {
      return { status: 'successful', data: allMatches };
    }

    const filteredMatches = allMatches
      .filter((match) => match.inProgress.toString() === actualProgress.toString());

    return { status: 'successful', data: filteredMatches };
  }

  public async finishMatch(id: number): Promise<ServiceResponse<string>> {
    await this.matchModel.finishByPk(id);
    return { status: 'successful', data: { message: 'Finished' } };
  }

  public async updatePlacar(placar: NewPlacar, matchId: number): Promise<ServiceResponse<IMatch>> {
    const newPlacar = { homeTeamGoals: placar.homeTeamGoals, awayTeamGoals: placar.awayTeamGoals };
    await this.matchModel.updatePlacar(newPlacar, matchId);
    return { status: 'successful', data: { message: 'Updated' } };
  }

  public async createMatch(data: NewMatch): Promise<ServiceResponse<IMatch>> {
    const newMatch = await this.matchModel.create(data);
    if (!newMatch) {
      return { status: 'notFound', data: { message: 'There is no team with such id!' } };
    }
    return { status: 'created', data: newMatch };
  }
}
