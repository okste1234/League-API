const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name of your team"]
    },
    location: {
        type: String,
    },
    league: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "League"
    },
},
    {
        timestamps: true
    }
)

const Team = mongoose.model('Team', teamSchema);

module.exports = Team