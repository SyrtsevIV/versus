const passport = require('passport')
const express = require('express')
const User = require('../models/User')

const router = express.Router()

router.get('/', async (req, res) => {
  if (req.session) {
    const userId = req.session.passport.user;
    const user = await User.findById(userId)
    res.json(user);
  }
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// auth with google+
router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:3000/')
})

module.exports = router
