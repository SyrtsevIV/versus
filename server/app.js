require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const Stats = require("./models/Stats");
const User = require("./models/User");
const passport = require("passport");
const authRouter = require("./routes/auth");
const passportSetup = require("./config/passport");
const tournament = require("./routes/tournament");
const wsServer = require('./ws');
const profileRouter = require('./routes/profile');
const compareRouter = require('./routes/compare');
const tournamentlistRoter = require('./routes/tournamentsList');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

console.log(wsServer)

const app = express();

const PORT = process.env.PORT ?? 3001;

mongoose.connect("mongodb://localhost:27017/Versus", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const tableTennisTournamentRouter = require("./routes/tableTennisTournament");
const rating = require("./routes/ratings");

// Значения корс для приема фетчей с клиента.
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("sessionName", "sid");
app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: "VersusIsTheBestTeamInTheWorld",
    name: app.get("sessionName"),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
// Значения корс для приема фетчей с клиента.
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    // optionsSuccessStatus: 200,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const checkUser = (req, res, next) => {
  if (req.session.passport) {
    console.log(req.session.passport);
    next();
  } else {
    res.redirect("http://localhost:3000/auth/signup");
  }
};

app.use("/auth", authRouter);
app.use("/tabletennis/tournament", tableTennisTournamentRouter);
app.use("/ratings", rating);
app.use("/tournament", tournament);

app.use('/profile', profileRouter);
app.use('/compare', compareRouter);
app.use('/tournamentlist', tournamentlistRoter);

app.listen(PORT, () => {
  console.log("Server has been started on port: ", PORT);
});
