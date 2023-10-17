const Team = require("../model/teamModel");

exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find({})
        res.status(200).json(teams)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message })
    }
};

exports.createTeam = async (req, res) => {
    try {
        const teams = await Team.create(req.body)
        res.status(200).json(teams)
    } catch (error) {
        console.error(error.message);
        res.sendStatus(500).json({ message: error.message })
    }
};