const mongoose = require('mongoose');

const Stats = mongoose.model('Stats', {
  sport: {
    type: String,
    require: true,
  },
  user: { type: mongoose.ObjectId, ref: 'User' },
  mmr: {
    type: Number,
    default: 500,
  },
  rating: Number,
  gold: {
    type: Number,
    default: 0,
  },
  silver: {
    type: Number,
    default: 0,
  },
  bronze: {
    type: Number,
    default: 0,
  },
});

module.exports = Stats;
