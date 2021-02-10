const express = require("express");
const Tournaments = require("../models/Tournament");
const User = require("../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tournamentsList = await Tournaments.find().populate("creator");
    const userInSession = await User.findById(req.user._id);
    res.json({tournamentsList, userInTournaments: userInSession.tournaments});
  } catch (error) {
    res.send("Что то из ошибок");
  }
});

module.exports = router;
