const LeagueRepository = require("../repository/leagueRepository");

exports.getAllLeagues = async (req, res) => {
  const leagues = await LeagueRepository.getAllLeagues();

  if (!leagues || leagues.length === 0) {
    throw new Error("Leagues not found");
  }
  res.status(200).json(leagues);
};

exports.createLeague = async (req, res) => {
  const { name, description } = req.body;

  const leagues = await LeagueRepository.createLeague(name, description);
  res.status(200).json(leagues);
};
