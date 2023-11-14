import sequelizeMatch from '../database/models/SequelizeMatch';
import IMatch from '../Interfaces/matches/IMatch';
import IMatchModel from '../Interfaces/matches/IMatchModel';

export default class MatchModel implements IMatchModel {
  private model = sequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }
}
