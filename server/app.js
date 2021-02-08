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
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app = express();

const PORT = process.env.PORT ?? 3001;

mongoose.connect("mongodb://localhost:27017/Versus", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const tableTennisTournamentRouter = require("./routes/tableTennisTournament");

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
app.use("/tournament", tournament);

app.get("/profile/:id", async (req, res) => {
  const { id } = req.params;
  const stats = await Stats.findOne({ user: id });
  const allPlayerRanks = await Stats.find();
  const allPlayerValue = await allPlayerRanks.length;
  allPlayerRanks.sort((a, b) => b.mmr - a.mmr);
  const user = await User.findById(id);
  let rating = allPlayerRanks.findIndex((el) => {
    return String(el.user) == id;
  });
  rating += 1;
  res.json({ stats, rating, user, allPlayerValue });
});

app.get("/compare/:id", async (req, res) => {
  const user = req.params.id;
  const findUser = await User.findOne({ login: user });
  const userStat = await Stats.findOne({ user: findUser.id });
  res.json(userStat);
});

app.listen(PORT, () => {
  console.log("Server has been started on port: ", PORT);
});
