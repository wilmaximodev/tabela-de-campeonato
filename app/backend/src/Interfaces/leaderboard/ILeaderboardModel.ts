import ILeaderboard from './ILeaderboard';

export default interface ILeaderboardModel extends ILeaderboard {
  homeTeamsClassification(): Promise<ILeaderboard[]>,
  awayTeamsClassification(): Promise<ILeaderboard[]>,
  generalClassification(): Promise<ILeaderboard[]>,
}
