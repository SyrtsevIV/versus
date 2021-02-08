const mongoose = require('mongoose');

const Bracket = mongoose.model('brackets', {
  tournament: { type: mongoose.ObjectId, ref: 'tournaments' },
  firstRound: Array,
});

module.exports = Bracket;
