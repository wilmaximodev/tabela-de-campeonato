import IMatch from './IMatch';
import { NewPlacar } from '../../types/NewPlacar';

export default interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  finishByPk(id: number): Promise<void>,
  updatePlacar(placar: NewPlacar, matchId: number): Promise<void>,
}
