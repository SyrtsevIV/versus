/* eslint-disable no-await-in-loop */
const mongoose = require('mongoose');
const User = require('../models/User');
const Stats = require('../models/Stats');
const faker = require('faker');
const Tournament = require('../models/Tournament');
mongoose.connect('mongodb://localhost:27017/Versus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const randomName = () => faker.name.findName();
const randomEmail = () => faker.internet.email();
const randomPass = () => faker.internet.password();
const randomMmr = () => faker.random.number();
const randomRating = () => faker.random.number();
const randomGold = () => faker.random.number();
const randomSilver = () => faker.random.number();
const randomBronze = () => faker.random.number();

// Seed users
async function seedUsers(num) {
  for (let i = 0; i < num; i += 1) {
    User.create({
      login: randomName(),
      email: randomEmail(),
      password: randomPass(),
    });
  }
}
// seedUsers(30);

// Seed stats
async function seedStats() {
  const users = await User.find();
  console.log('users', users);
  for (let i = 0; i < users.length; i += 1) {
    const stats = await Stats.create({
      sport: 'table tennis',
      user: users[i]._id,
      mmr: randomMmr(),
      rating: randomRating(),
      gold: randomGold(),
      silver: randomSilver(),
      bronze: randomBronze(),
    });
    const user = await User.findById(users[i]._id);
    user.stats = stats._id;
    await user.save();
  }
}
// seedStats();

// Seed Tournaments

async function seedTournament(num) {
  const users = await User.find();
  Tournament.create({
    participants: users.slice(-num),
  });
}

// seedTournament();

// Seed Brackets

const start = async () => {
  await seedUsers(16);
  await seedStats();
  await seedTournament(30);
};

start();
