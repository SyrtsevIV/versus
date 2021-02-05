const express = require('express');
const Bracket = require('../models/Bracket');
const Tournament = require('../models/Tournament');
const Stats = require('../models/Stats');

const router = express.Router();

const tournamentDB = {
  participants: [
    {
      login: 'Semen',
      stats: {
        mmr: 3000,
      },
    },
    {
      login: 'Igor',
      stats: {
        mmr: 2500,
      },
    },
    {
      login: 'Tapac',
      stats: {
        mmr: 1000,
      },
    },
    {
      login: 'Ilona',
      stats: {
        mmr: 4000,
      },
    },
    {
      login: 'Alex',
      stats: {
        mmr: 2000,
      },
    },
    {
      login: 'Bravo',
      stats: {
        mmr: 2600,
      },
    },
  ],
};

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
function makePairs(array, num = array.length) {
  // сортировка по рейтингу по убыванию
  array.sort((a, b) => (a.stats.mmr > b.stats.mmr ? -1 : 1));

  // slice топ и бот без пар
  const top = array.slice(0, num - array.length);
  const bot = array.slice(num - array.length);

  // добавление фантомного игрока топам
  const topOnPair = top.map((el) => [el, { login: '' }]);

  // перемешиваем и разбиваем на пары оставшихся
  shuffle(bot);
  const botOnPair = [];
  for (let i = 0; i < Math.ceil(bot.length / 2); i += 1) {
    botOnPair[i] = bot.slice(i * 2, i * 2 + 2);
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

router.get('/:tournamentId/bracket/new', async (req, res) => {
  // const tournament = await Tournament.findById(req.params.id).populate(
  //   'participants.stats'
  // );
  // const firstRoundBracket = getBracket(tournament.participants);
  // res.json(firstRoundBracket);
  const firstRoundBracket = getBracket(tournamentDB.participants);
  const bracket = await Bracket.create({ firstRound: firstRoundBracket });
  res.json(bracket);
});

module.exports = router;
