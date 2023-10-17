const mongoose = require("mongoose")


const leagueSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the name of your Top-tier football league"]
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

const League = mongoose.model('League', leagueSchema);

module.exports = League