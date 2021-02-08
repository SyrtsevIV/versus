const express = require('express');
const Stats = require('../models/Stats');

const router = express.Router();

router.get('/tabletennis', async (req, res) => {
  const stats = await Stats.find().populate('user');
  res.json(stats);
});

module.exports = router;
