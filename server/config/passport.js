require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const Stats = require("../models/Stats");
const bcrypt = require("bcrypt");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(async (currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          const newUser = new User({
            googleId: profile.id,
            login: profile._json.given_name,
            avatar: profile._json.picture,
          })
          const stats = new Stats({ user: newUser._id });
          await stats.save();
          newUser.stats = stats._id;
          await newUser.save();
          return done(null, newUser, stats);
        }
      });
    }
  )
);

const authenticateUser = async (req, email, password, done) => {
  if (/signin/.test(req.path)) {
    const user = await User.findOne({ email });
    if (!user) return done(null, false);
    if (await bcrypt.compare(password, user.password)) return done(null, user);
    return done(null, false);
  }
  const { login, passwordCheck } = req.body;
  const userFound = await User.findOne({ email });
  if (userFound) {
    return done(null, false);
  }
  if (login && email && password && passwordCheck) {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ login, email, password: hashPassword });
    const stats = new Stats({ user: newUser._id });
    newUser.stats = stats._id;
    await newUser.save();
    await stats.save();
    return done(null, newUser, stats);
  }
  return done(null, false);
};

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    authenticateUser
  )
);
