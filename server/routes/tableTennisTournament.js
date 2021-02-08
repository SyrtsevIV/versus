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
async function makePairs(array, num = array.length, tour) {
  // сортировка по рейтингу по убыванию
  array.sort((a, b) => (a.stats.mmr > b.stats.mmr ? -1 : 1));

  // slice топ и бот без пар
  const top = array.slice(0, num - array.length);
  const bot = array.slice(num - array.length);

  // добавление фантомного игрока топам
  shuffle(top);
  const topOnPair = [];
  for (let i = 0; i < top.length; i += 1) {
    topOnPair[i] = await Match.create({ player1: top[i], tour });
  }

  // перемешиваем и разбиваем на пары оставшихся
  shuffle(bot);
  const botOnPair = [];
  for (let i = 0; i < Math.ceil(bot.length / 2); i += 1) {
    botOnPair[i] = await Match.create({
      player1: bot.slice(i * 2, i * 2 + 2)[0],
      player2: bot.slice(i * 2, i * 2 + 2)[1],
      tour,
    });
  }

  // объединяем пары и перемешиваем сетку
  const result = topOnPair.concat(botOnPair);
  return shuffle(result);
}

function getBracket(array) {
  if (array.length < 8 && array.length > 4) return makePairs(array, 8, 'quarterfinals');
  if (array.length < 16 && array.length > 8) return makePairs(array, 16, 'oneEighth');
  if (array.length < 32 && array.length > 16) return makePairs(array, 32, 'oneSixteenth');
  if (array.length > 32) return 'перебор';
  return makePairs(array, 'semifinal');
}

router.get('/future', async (req, res) => {
  const tournament = await Tournament.find({ status: 'future' });
  res.json(tournament);
});

router.get('/past', async (req, res) => {
  const tournament = await Tournament.find({ status: 'past' });
  res.json(tournament);
});

router.get('/current', async (req, res) => {
  const tournament = await Tournament.find({ status: 'current' });
  res.json(tournament);
});

router.get('/:tournamentId', async (req, res) => {
  const tournament = await Tournament.findById(req.params.tournamentId)
    .populate({
      path: 'bracket',
      populate: { path: 'oneSixteenth', populate: { path: 'player1' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'oneSixteenth', populate: { path: 'player2' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'oneEighth', populate: { path: 'player1' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'oneEighth', populate: { path: 'player2' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'quarterfinals', populate: { path: 'player1' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'quarterfinals', populate: { path: 'player2' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'semifinal', populate: { path: 'player1' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'semifinal', populate: { path: 'player2' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'thirdPlace', populate: { path: 'player1' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'thirdPlace', populate: { path: 'player2' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'final', populate: { path: 'player1' } },
    })
    .populate({
      path: 'bracket',
      populate: { path: 'final', populate: { path: 'player2' } },
    });
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

  tournament.bracket = bracket;
  tournament.save();

  res.json(bracket);
});

router.put('/match/end/:id', async (req, res) => {
  const match = await Match.findByIdAndUpdate({ _id: req.params.id }, { ended: true });
  const { tour } = match;
  await Bracket.findOne({ tour: req.params.id });
  res.json({ match });
});

// матч
router.get('/match/:id', async (req, res) => {
  const match = await Match.findById(req.params.id).populate('player1').populate('player2');
  res.json({ match });
});

// изменение счета
router.put('/match/:id', async (req, res) => {
  const { playerName, plus, minus } = req.body;
  const match = await Match.findById(req.params.id).populate('player1').populate('player2');
  if (plus) {
    match.score[playerName] += 1;
  }
  if (minus) {
    if (match.score[playerName] > 0) match.score[playerName] -= 1;
  }
  match.save();
  res.json({ match });
});

module.exports = router;
