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
  try {
    const userId = req.user._id;
    const { id: tournamentId } = req.body;
    const newToutnament = await Tournament.findById(tournamentId);
    const user = await User.findById(userId);
    const userInTournament = newToutnament.participants.includes(userId);
    if (!userInTournament && newToutnament.participants.length < 32) {
      newToutnament.participants.push(userId);
      await newToutnament.save();
      user.tournaments.push(tournamentId);
      await user.save();
      if (newToutnament.participants.length > 31) {
        console.log('if');
        res.redirect(`${process.env.SERVER_URL}/tabletennis/tournament/${newToutnament._id}/bracket/new`);
      }
      res.sendStatus(200);
    } else {
      const newParticipants = newToutnament.participants.filter((el) => String(el._id) !== String(userId));
      newToutnament.participants = newParticipants;
      await newToutnament.save();
      const newTournaments = user.tournaments.filter((el) => String(el._id) !== tournamentId);
      user.tournaments = newTournaments;
      await user.save();
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tournament = await Tournament.findById(id).populate('participants').populate('creator');
  res.json(tournament);
});

module.exports = router;
