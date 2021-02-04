const passport = require('passport')
const express = require('express')

const router = express.Router()

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// auth with google+
router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/')
})

module.exports = router
