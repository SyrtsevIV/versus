const mongoose = require('mongoose');

// mongoose.pluralize(null);

const Stats = mongoose.model('Stats', {
  sport: {
    type: String,
    require: true,
  },
  user: { type: mongoose.ObjectId, ref: 'users' },
  mmr: {
    type: Number,
    default: 500,
  },
  rating: Number,
  won: Number,
  lost: Number,
  score: Number,
  missed: Number,
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
