const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    position: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    },
    isCaptain: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true
    });

const Player = mongoose.model('Player', playerSchema);

module.exports = Player