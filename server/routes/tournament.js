const express = require('express');
const Tournament = require('../models/Tournament');
const User = require('../models/User');
const router = express.Router();

router.post('/new', async (req, res) => {
  const { type, title, description, date, place } = req.body;
  const newTournament = await new Tournament({
    type,
    title,
    description,
    date,
    place,
    creator: req.user._id,
  });
  await newTournament.save();
  res.json(newTournament._id);
});

router.post('/reg', async (req, res) => {
  const userId = req.user._id;
  const { id: tournamentId } = req.body;
  const newReg = await Tournament.findById(tournamentId);
  const user = await User.findById(userId);
  const userInTournament = newReg.participants.includes(userId);
  if (!userInTournament && newReg.participants.length < 32) {
    newReg.participants.push(userId);
    newReg.save();
    user.tournaments.push(tournamentId);
    user.save();
    if (newReg.participants.length > 31) {
      res.redirect(`${process.env.SERVER_URL}/tabletennis/tournament/${newReg._id}/bracket/new`);
    }
  } else {
    res.json({ message: 'Места нет' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tournament = await Tournament.findById(id).populate('participants').populate('creator');
  res.json(tournament);
});

module.exports = router;
