const express = require('express');
const Tournaments = require('../models/Tournament');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tournamentsList = await Tournaments.find().populate('creator');
    res.json(tournamentsList);
  } catch (error) {
    res.send('Что то из ошибок');
  }
});

module.exports = router;
