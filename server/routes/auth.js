const passport = require("passport");
const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(200);
});

router.get("/", async (req, res) => {
  console.log("user", req.session);
  if (req.user) {
    const userId = req.session.passport.user;
    const user = await User.findById(userId);
    res.json(user);
  }
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("http://localhost:3000/");
});

router.post("/signin", passport.authenticate("local"), (req, res) => {
  res.json({ status: 200 });
});

router.post("/signup", passport.authenticate("local"), (req, res) => {
  res.json({ status: 200 });
});

module.exports = router;
