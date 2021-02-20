const express = require('express');
const User = require('../models/User');
const Stats = require('../models/Stats');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const user = req.params.id;
  try {
    const findUser = await User.findOne({ login: user });
    const userStat = await Stats.findOne({ user: findUser.id });
    res.json(userStat);
  } catch (error) {
    res.send('Не нашел такого юзера =(');
  }
});

module.exports = router;
