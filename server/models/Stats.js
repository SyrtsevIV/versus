const mongoose = require('mongoose');

// mongoose.pluralize(null);

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
  rating: {
    type: Number,
    default: 0,
  },
  won: {
    type: Number,
    default: 0,
  },
  lost: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },
  missed: {
    type: Number,
    default: 0,
  },
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
