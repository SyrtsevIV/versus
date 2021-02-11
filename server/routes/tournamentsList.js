const express = require("express");
const Tournaments = require("../models/Tournament");
const User = require("../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userInSession = await User.findById(req.user?._id);
    if (userInSession) {
      console.log('ПОПАВСЯ');
      const tournamentsList = await Tournaments.find().populate("creator");
      res.json({tournamentsList, userInTournaments: userInSession.tournaments })
    } else {
      const tournamentsList = await Tournaments.find().populate("creator");
      res.json({ tournamentsList })
    }
  } catch (error) {
    res.send("Что то из ошибок");
  }
});

module.exports = router;
