import MatchModel from '../models/MatchModel';
import IMatch from '../Interfaces/matches/IMatch';
import IMatchModel from '../Interfaces/matches/IMatchModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { InProgressType } from '../types/InProgress';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
  ) { }

  public async getAllMatches(progress: InProgressType): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.matchModel.findAll();
    const actualProgress = progress.inProgress;

    if (actualProgress === undefined || actualProgress === null) {
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
}
