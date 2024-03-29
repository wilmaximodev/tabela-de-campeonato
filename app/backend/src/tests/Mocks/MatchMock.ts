const match = {
  "id": 1,
  "homeTeamId": 16,
  "homeTeamGoals": 1,
  "awayTeamId": 8,
  "awayTeamGoals": 1,
  "inProgress": true
};

const matches = [match];

const inProgressFalse = [
	{
	  id: 1,
	  homeTeamId: 16,
	  homeTeamGoals: 1,
	  awayTeamId: 8,
	  awayTeamGoals: 1,
	  inProgress: false,
	  homeTeam: {
		id: 16,
		teamName: "São Paulo"
	  },
	  awayTeam: {
		id: 8,
		teamName: "Grêmio"
	  }
	},
	{
	  id: 2,
	  homeTeamId: 9,
	  homeTeamGoals: 1,
	  awayTeamId: 14,
	  awayTeamGoals: 1,
	  inProgress: false,
	  homeTeam: {
		id: 9,
		teamName: "Internacional"
	  },
	  awayTeam: {	
		id: 14,
		teamName: "Santos"
	  }
	},
];

const inProgressTrue = [
	{
	  id: 41,
	  homeTeamId: 16,
	  homeTeamGoals: 2,	
	  awayTeamId: 9,
	  awayTeamGoals: 0,
	  inProgress: true,
	  homeTeam: {
		id: 16,
		teamName: "São Paulo"
	  },
	  awayTeam: {
		id: 9,
		teamName: "Internacional"
	  }
	},
	{
	  id: 42,
	  homeTeamId: 6,
	  homeTeamGoals: 1,
	  awayTeamId: 1,
	  awayTeamGoals: 0,
	  inProgress: true,
	  homeTeam: {
		id: 6,
		teamName: "Ferroviária"
	  },
	  awayTeam: {
		id: 1,
		teamName: "Avaí/Kindermann"
	  }
	},
];

const newPlacar = {
  "homeTeamGoals": 3,
  "awayTeamGoals": 1
};

const validMatch = {
  "homeTeamId": 16, // O valor deve ser o id do time
  "awayTeamId": 8, // O valor deve ser o id do time
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
};

const createMatch = {
  "id": 51,
  "homeTeamId": 16,
  "homeTeamGoals": 2,
  "awayTeamId": 8,
  "awayTeamGoals": 2
};

const invalidMatch = {
  "homeTeamId": 16,
  "awayTeamId": 16,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
};

const invalidMatch2 = {
  "homeTeamId": 77,
  "awayTeamId": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
};

export {
  match,
  matches,
  inProgressFalse,
  inProgressTrue,
  newPlacar,
  validMatch,
  createMatch,
  invalidMatch,
  invalidMatch2,
};
