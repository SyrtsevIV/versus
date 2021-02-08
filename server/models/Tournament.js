const mongoose = require('mongoose');

// mongoose.pluralize(null);

const Tournament = mongoose.model('tournaments', {
  title: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
    default: new Date(),
  },
  description: String,
  place: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
    default: 'future',
  },
  creator: { type: mongoose.ObjectId, ref: 'users' },
  participants: [{ type: mongoose.ObjectId, ref: 'users' }],
  bracket: { type: mongoose.ObjectId, ref: 'brackets' },
});

module.exports = Tournament;
