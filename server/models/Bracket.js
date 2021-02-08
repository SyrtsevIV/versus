const mongoose = require('mongoose');

const Bracket = mongoose.model('Bracket', {
  tournament: { type: mongoose.ObjectId, ref: 'Tournament' },
  oneSixteenth: [{ type: mongoose.ObjectId, ref: 'Match' }],
  oneEighth: [{ type: mongoose.ObjectId, ref: 'Match' }],
  quarterfinals: [{ type: mongoose.ObjectId, ref: 'Match' }],
  semifinal: [{ type: mongoose.ObjectId, ref: 'Match' }],
  thirdPlace: { type: mongoose.ObjectId, ref: 'Match' },
  final: { type: mongoose.ObjectId, ref: 'Match' },
});

module.exports = Bracket;
