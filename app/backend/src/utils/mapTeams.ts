import ILeaderboard from '../Interfaces/leaderboard/ILeaderboard';

export default function mapTeams(teams: ILeaderboard[]) {
  const Teams = teams.map((team) => ({
    name: team.name,
    totalPoints: Number(team.totalPoints),
    totalGames: Number(team.totalGames),
    totalVictories: Number(team.totalVictories),
    totalDraws: Number(team.totalDraws),
    totalLosses: Number(team.totalLosses),
    goalsFavor: Number(team.goalsFavor),
    goalsOwn: Number(team.goalsOwn),
    goalsBalance: Number(team.goalsBalance),
    efficiency: team.efficiency,
  }));
  return Teams;
}
