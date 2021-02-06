require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy({
    // options for google strategy
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect',
  }, (accessToken, refreshToken, profile, done) => {
    // check if user already exists in our own db
    User.findOne({ googleId: profile.id })
    .then((currentUser) => {
      if (currentUser) {
        // already have this user
        done(null, currentUser)
      } else {
        // if not, create user in our db
        new User({
          googleId: profile.id,
          login: profile._json.given_name,
          avatar: profile._json.picture,
        })
        .save()
        .then((newUser) => {
          // console.log('created new user: ', newUser)
          done(null, newUser)
         
        })
      }
    })
  }),
)
