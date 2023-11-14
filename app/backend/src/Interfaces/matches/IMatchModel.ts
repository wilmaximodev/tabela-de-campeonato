import IMatch from './IMatch';
import { NewPlacar } from '../../types/NewPlacar';
import { NewMatch } from '../../types/NewMatch';

export default interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  finishByPk(id: number): Promise<void>,
  updatePlacar(placar: NewPlacar, matchId: number): Promise<void>,
  create(data: NewMatch): Promise<IMatch>,
}
