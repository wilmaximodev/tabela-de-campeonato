import IMatch from './IMatch';

export default interface IMatchModel {
  findAll(): Promise<IMatch[]>,
}
