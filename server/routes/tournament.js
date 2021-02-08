const express = require("express");
const Tournament = require("../models/Tournament");
const router = express.Router();

router.post('/new', async (req, res) => {
  const {type, title, description, date, place} = req.body;
  const newTournament = await new Tournament({type, title, description, date, place, creator: req.user._id})
  await newTournament.save()
  res.json(newTournament._id)
})

module.exports = router;
