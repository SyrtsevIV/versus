const passport = require("passport");
const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/in_session", async (req, res) => {
  if (req.user) {
    const userId = req.session.passport.user;
    const user = await User.findById(userId);
    res.json(user);
  }
});

router.get("/logout", (req, res) => {
  try {
    req.logout();
    req.session.destroy();
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/signup" }),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);

router.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "/signup",
  }),
  (req, res) => {
    res.json({ status: 200, user: req.user });
  }
);

router.post(
  "/signup",
  passport.authenticate("local", {
    failureRedirect: "/signup",
  }),
  (req, res) => {
    res.json({ status: 200, user: req.user });
  }
);

module.exports = router;
