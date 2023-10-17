const League = require("../model/leagueModel");

exports.getAllLeagues = async (req, res) => {
    try {
        const leagues = await League.find({})
        res.status(200).json(leagues)
    } catch (error) {
        console.error(error.message);
        res.sendStatus(500).json({ message: error.message })
    }
};

exports.createLeague = async (req, res) => {
    try {
        const leagues = await League.create(req.body)
        res.status(200).json(leagues)

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message })
    }
};