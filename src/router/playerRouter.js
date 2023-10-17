const express = require('express');
const playerController = require('../controller/playerController');

const router = express.Router();

router.get('/', playerController.getAllPlayers);
router.post('/', playerController.createPlayer);
router.put('/:id', playerController.updatePlayer);

module.exports = router;