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

const tableTennisTournamentRouter = require('./routes/tableTennisTournament');

// Значения корс для приема фетчей с клиента.
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tabletennis/tournament', tableTennisTournamentRouter);

app.get('/profile/:id', async (req, res) => {
  const { id } = req.params;
  const allPlayerRanks = await Stats.find();
  allPlayerRanks.sort((a, b) => b.mmr - a.mmr);

  // Найти индекс по которому находится пользователь. Это будет его место в общем рейтинге
  console.log(allPlayerRanks);

  const stats = await Stats.findOne({ user: id });
  res.send(stats);
});

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT);
});
