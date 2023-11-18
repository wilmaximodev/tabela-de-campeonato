const query = `
SELECT
  t.team_name AS name,
  COUNT(*) AS totalGames,
  SUM(m.home_team_goals) AS goalsFavor,
  SUM(m.away_team_goals) AS goalsOwn,
  SUM(m.home_team_goals > m.away_team_goals) AS totalVictories,
  SUM(m.home_team_goals = m.away_team_goals) AS totalDraws,
  SUM(m.home_team_goals < m.away_team_goals) AS totalLosses,
  (SUM(m.home_team_goals > m.away_team_goals) * 3 + SUM(m.home_team_goals = m.away_team_goals)) AS totalPoints,
  (SUM(m.home_team_goals) - SUM(m.away_team_goals)) AS goalsBalance,
  (SUM(m.home_team_goals > m.away_team_goals) * 3 + SUM(m.home_team_goals = m.away_team_goals)) / (COUNT(*) * 3) * 100 AS efficiency
FROM
  matches m
  JOIN teams t ON m.home_team_id = t.id
WHERE
  m.in_progress = false
GROUP BY
  name
ORDER BY
  totalPoints DESC,
  goalsBalance DESC,
  goalsFavor DESC;
`;

const allMatches = `
(
  SELECT
    home_team_id AS team_id,
    home_team_goals AS goalsFavor,
    away_team_goals AS goalsOwn
  FROM
    matches
  WHERE
    in_progress = false
  UNION ALL
  SELECT
    away_team_id AS team_id,
    away_team_goals AS goalsFavor,
    home_team_goals AS goalsOwn
  FROM
    matches
  WHERE
    in_progress = false
) AS m`;

function createQuery(type: 'all' | 'home' | 'away') {
  switch (type) {
    case 'home': return query;
    case 'all': return query
      .replace('WHERE m.in_progress = false', '').replace('matches m', allMatches);
    case 'away': return query.replace(/(home)|(away)/g, (_, group) => (group ? 'away' : 'home'));

    default: return query;
  }
}

export default createQuery;
