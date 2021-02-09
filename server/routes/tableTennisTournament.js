/* eslint-disable no-underscore-dangle */
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
    topOnPair[i] = await Match.create({ player1: top[i], tour, score: { player1: 11 }, ended: true });
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
  return makePairs(array, 4, 'semifinal');
}

function whichPlayer(index) {
  if (index % 2 === 0) {
    return 'player1';
  }
  return 'player2';
}

// для автомотической записи игроков, которым не достался соперник в первом туре, в следующий тур
async function setNextTour(currentTour, nextTour, nextTourName, phantom) {
  for (let i = 0; i < currentTour.length; i += 1) {
    if (currentTour[i].score.player1 === 11) {
      const nextTourMatchIndex = Math.floor(i / 2);
      if (nextTour[nextTourMatchIndex]) {
        const currentTourMatch = await Match.findById(nextTour[nextTourMatchIndex])
          .populate('player1')
          .populate('player2');
        if (currentTourMatch?.player1 || currentTourMatch?.player2) {
          currentTourMatch[whichPlayer(i)] = currentTour[i].player1._id;
          await currentTourMatch.save();
        }
      } else {
        const nextTourMatch = await Match.create({
          [whichPlayer(i)]: currentTour[i].player1._id,
          tour: nextTourName,
        });
        nextTour[nextTourMatchIndex] = nextTourMatch._id;
        for (let j = 0; j < nextTour.length; j += 1) {
          nextTour[j] = !nextTour[j] ? phantom._id : nextTour[j];
        }
      }
    }
  }
  return nextTour;
}

async function nextTour(
  bracket,
  bracketTour,
  currentTourMatchIndex,
  nextTourMatchIndex,
  nextTourMatch,
  winnerId,
  nextTourName,
  phantom
) {
  if (bracketTour[nextTourMatchIndex]?.player1 || bracketTour[nextTourMatchIndex]?.player2) {
    nextTourMatch = bracketTour[nextTourMatchIndex];
    nextTourMatch[whichPlayer(currentTourMatchIndex)] = winnerId;
    nextTourMatch.save();
  } else {
    nextTourMatch = await Match.create({
      [whichPlayer(currentTourMatchIndex)]: winnerId,
      tour: nextTourName,
    });
    bracketTour[nextTourMatchIndex] = nextTourMatch._id;
    for (let i = 0; i < bracketTour.length; i += 1) {
      bracketTour[i] = !bracketTour[i] ? phantom._id : bracketTour[i];
    }
    await bracket.markModified(nextTourName);
  }
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
  const phantom = await Match.create({ phantom: '' });
  switch (firstRoundBracket.length) {
    case 2:
      semifinal = firstRoundBracket;
      break;
    case 4:
      quarterfinals = firstRoundBracket;
      semifinal = await setNextTour(quarterfinals, semifinal, 'semifinal', phantom);
      break;
    case 8:
      oneEighth = firstRoundBracket;
      quarterfinals = await setNextTour(oneEighth, quarterfinals, 'quarterfinals', phantom);
      break;
    case 16:
      oneSixteenth = firstRoundBracket;
      oneEighth = await setNextTour(oneSixteenth, oneEighth, 'oneEighth', phantom);
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
  tournament.status = 'current';
  tournament.save();

  res.json(bracket);
});

// завершить регистрацию на турнир
router.put('/match/end/:id', async (req, res) => {
  const currentTourMatch = await Match.findById(req.params.id).populate('player1').populate('player2');
  currentTourMatch.ended = true;
  let winnerId = '';
  let losserId = '';
  if (currentTourMatch.score.player1 > currentTourMatch.score.player2) {
    winnerId = currentTourMatch.player1._id;
    losserId = currentTourMatch.player2._id;
  } else {
    winnerId = currentTourMatch.player2._id;
    losserId = currentTourMatch.player1._id;
  }

  const { tour } = currentTourMatch;
  console.log('tour', tour);
  const bracket = await Bracket.findOne({ [tour]: req.params.id });
  const currentTourMatchIndex = bracket[tour].indexOf(req.params.id);
  await bracket
    .populate('oneSixteenth')
    .populate('oneEighth')
    .populate('quarterfinals')
    .populate('semifinal')
    .populate('thirdPlace')
    .populate('final')
    .execPopulate();
  // console.log('bracket', bracket.populated());
  const nextTourMatchIndex = Math.floor(currentTourMatchIndex / 2);
  let nextTourMatch = {};
  let thirdPlaceMatch = {};
  // let array = [];
  const phantom = await Match.create({ phantom: '' });

  switch (tour) {
    case 'oneSixteenth':
      await nextTour(
        bracket,
        bracket.oneEighth,
        currentTourMatchIndex,
        nextTourMatchIndex,
        nextTourMatch,
        winnerId,
        'oneEighth',
        phantom
      );
      break;

    case 'oneEighth':
      await nextTour(
        bracket,
        bracket.quarterfinals,
        currentTourMatchIndex,
        nextTourMatchIndex,
        nextTourMatch,
        winnerId,
        'quarterfinals',
        phantom
      );
      break;

    case 'quarterfinals':
      await nextTour(
        bracket,
        bracket.semifinal,
        currentTourMatchIndex,
        nextTourMatchIndex,
        nextTourMatch,
        winnerId,
        'semifinal',
        phantom
      );
      break;
    case 'semifinal':
      if (bracket.final?.player1 || bracket.final?.player2) {
        nextTourMatch = bracket.final;
        nextTourMatch[whichPlayer(currentTourMatchIndex)] = winnerId;
        nextTourMatch.save();
      } else {
        nextTourMatch = await Match.create({
          [whichPlayer(currentTourMatchIndex)]: winnerId,
          tour: 'final',
        });
        bracket.final = nextTourMatch._id;
        await bracket.markModified('final');
      }
      if (bracket.thirdPlace?.player1 || bracket.thirdPlace?.player2) {
        thirdPlaceMatch = bracket.thirdPlace;
        thirdPlaceMatch[whichPlayer(currentTourMatchIndex)] = losserId;
        thirdPlaceMatch.save();
      } else {
        thirdPlaceMatch = await Match.create({
          [whichPlayer(currentTourMatchIndex)]: losserId,
          tour: 'thirdPlace',
        });
        bracket.thirdPlace = thirdPlaceMatch._id;
        await bracket.markModified('thirdPlace');
      }
      break;
    default:
      break;
  }
  await bracket.save();
  res.json({ currentTourMatch });
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
