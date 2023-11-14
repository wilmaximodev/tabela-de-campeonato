import IMatch from './IMatch';

export default interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  finishByPk(id: number): Promise<void>,
}
