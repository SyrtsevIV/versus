const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');
const Stats = require('./models/Stats');
const User = require('./models/User');

const app = express();

const PORT = process.env.PORT ?? 3001;

mongoose.connect('mongodb://localhost:27017/Versus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/profile/:id', async (req, res) => {
  const { id } = req.params;
  const stats = await Stats.findOne({ user: id });
  const allPlayerRanks = await Stats.find();
  const allPlayerValue = await allPlayerRanks.length;
  allPlayerRanks.sort((a, b) => b.mmr - a.mmr);
  const user = await User.findById(id);
  let rating = allPlayerRanks.findIndex((el) => {
    return String(el.user) == id
  });
  rating += 1;
  res.json({ stats, rating, user, allPlayerValue });
});

app.get('/compare/:id', async (req, res) => {
  const user = req.params.id;
  const findUser = await User.findOne({ login: user });
  const userStat = await Stats.findOne({ user: findUser.id });
  res.json(userStat);
});

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT);
});
