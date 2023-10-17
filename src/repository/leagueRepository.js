const League = require("../model/leagueModel");



const LeagueRepository = {
     createLeague: async(name, description) => {
        const league = await League.create({
          name: name,
          description: description
        })  
        return league;
     },
     getAllLeagues: async()=> {
          const league = await League.find({})

          return league;
     }
}

module.exports = LeagueRepository