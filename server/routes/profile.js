const express = require('express');
const User = require('../models/User');
const Stats = require('../models/Stats');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
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
  } catch (error) {
    // Что отправить в качестве ошибки?
    res.send('Не нашел такого юзера =(');
  }
});

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const login = req.body.changeLogin;
    const email = req.body.changeEmail;
    const user = await User.findByIdAndUpdate(id, { login, email });
    res.json(user);
  } catch (error) {
    // Что отправить в качестве ошибки?
    res.send('Что то пошло не так =(');
  }
});

module.exports = router;
