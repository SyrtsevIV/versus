const mongoose = require('mongoose');

const Match = mongoose.model('Match', {
  player1: { type: mongoose.ObjectId, ref: 'User' },
  player2: { type: mongoose.ObjectId, ref: 'User' },
  phantom: { type: String, default: '' },
  score: { player1: { type: Number, default: 0 }, player2: { type: Number, default: 0 } },
  ended: { type: Boolean, default: false },
  tour: String,
  duration: String,
});

module.exports = Match;
