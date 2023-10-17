const Router = require ('express');
const LeagueRouter = require("./leagueRouter")
const TeamRouter = require("./teamRouter")
const PlayeRouter = require("./playerRouter")

const router = Router()


router.use("/api/v1/leagues", LeagueRouter)
router.use("/api/v1/teams",TeamRouter )
router.use("/api/v1/players", PlayeRouter)


module.exports = router;