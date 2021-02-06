const mongoose = require('mongoose');
const Bracket = require('../models/Bracket');
const Tournament = require('../models/Tournament');
const Stats = require('../models/Stats');
const User = require('../models/User');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/Versus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const randomName = () => faker.internet.userName();

