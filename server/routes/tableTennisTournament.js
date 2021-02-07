/* eslint-disable no-await-in-loop */
const express = require('express');
const Bracket = require('../models/Bracket');
const Tournament = require('../models/Tournament');
const Match = require('../models/Match');
const Stats = require('../models/Stats');

const router = express.Router();

// функция для перемешивания
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// разбивает на пары и перемешивает
async function makePairs(array, num = array.length) {
  // сортировка по рейтингу по убыванию
  array.sort((a, b) => (a.stats.mmr > b.stats.mmr ? -1 : 1));

  // slice топ и бот без пар
  const top = array.slice(0, num - array.length);
  const bot = array.slice(num - array.length);

  // добавление фантомного игрока топам
  shuffle(top);
  const topOnPair = [];
  for (let i = 0; i < top.length; i += 1) {
    topOnPair[i] = await Match.create({ player1: top[i] });
  }

  // перемешиваем и разбиваем на пары оставшихся
  shuffle(bot);
  const botOnPair = [];
  for (let i = 0; i < Math.ceil(bot.length / 2); i += 1) {
    botOnPair[i] = await Match.create({
      player1: bot.slice(i * 2, i * 2 + 2)[0],
      player2: bot.slice(i * 2, i * 2 + 2)[1],
    });
  }

  // объединяем пары и перемешиваем сетку
  const result = topOnPair.concat(botOnPair);
  return shuffle(result);
}

function getBracket(array) {
  if (array.length < 8 && array.length > 4) return makePairs(array, 8);
  if (array.length < 16 && array.length > 8) return makePairs(array, 16);
  if (array.length < 32 && array.length > 16) return makePairs(array, 32);
  if (array.length > 32) return 'перебор';
  return makePairs(array);
}

router.get('/:tournamentId', async (req, res) => {
  const tournament = await Tournament.findById(req.params.tournamentId).populate('bracket');
  res.json(tournament);
});

// создание турнирной сетки
router.get('/:tournamentId/bracket/new', async (req, res) => {
  const tournament = await Tournament.findById(req.params.tournamentId).populate({
    path: 'participants',
    populate: { path: 'stats' },
  });

  const firstRoundBracket = await getBracket(tournament.participants);

  let semifinal = [];
  let quarterfinals = [];
  let oneEighth = [];
  let oneSixteenth = [];
  switch (firstRoundBracket.length) {
    case 2:
      semifinal = firstRoundBracket;
      break;
    case 4:
      quarterfinals = firstRoundBracket;
      break;
    case 8:
      oneEighth = firstRoundBracket;
      break;
    case 16:
      oneSixteenth = firstRoundBracket;
      break;
    default:
      break;
  }

  const bracket = await Bracket.create({
    tournament: req.params.tournamentId,
    semifinal,
    quarterfinals,
    oneEighth,
    oneSixteenth,
  });

  res.json(bracket);
});

router.get('/match/:id', async (req, res) => {
  const match = await Match.findById(req.params.id).populate('player1').populate('player2');
  res.json({ match });
});

module.exports = router;
