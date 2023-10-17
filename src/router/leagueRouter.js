const express = require("express");
const leagueController = require("../controller/leagueController")

const router = express.Router();

router.get("/", leagueController.getAllLeagues);
router.post("/", leagueController.createLeague)

module.exports = router