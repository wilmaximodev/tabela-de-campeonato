import ILeaderboard from './ILeaderboard';

export default interface ILeaderboardModel extends ILeaderboard {
  homeTeamsClassification(): Promise<ILeaderboard[]>,
}
