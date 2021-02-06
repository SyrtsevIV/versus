const mongoose = require('mongoose');

const Bracket = mongoose.model('Bracket', {
  tournament: { type: mongoose.ObjectId, ref: 'Tournament' },
  firstRound: Array,
});

module.exports = Bracket;
