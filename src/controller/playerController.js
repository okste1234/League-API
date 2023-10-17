const Player = require("../model/playerModel");

exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find({})
        res.status(200).json(players)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message })
    }
};

exports.createPlayer = async (req, res) => {
    try {
        const players = await Player.create(req.body)
        res.status(200).json(players)
    } catch (error) {
        console.error(error.message);
        res.sendStatus(500).json({ message: error.message })
    }
};

exports.updatePlayer = async (req, res) => {
    try {
        const { id } = req.params
        const player = await Player.findByIdAndUpdate(id, req.body)
        if (!player) {
            res.status(404).json({ message: `cannot find player with the ID: ${id}` })
        }

        const updatedPlayer = await Player.findById(id)
        res.status(200).json(updatedPlayer)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};