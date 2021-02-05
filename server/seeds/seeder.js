const mongoose = require('mongoose');
const User = require("../models/User");
const Stats = require('../models/Stats');
const faker = require('faker');
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
async function seedUsers() {
  for (let i = 0; i < 30; i+=1) {
    User.create({ 
      login: randomName(), 
      email: randomEmail(), 
      password: randomPass() });
  }
}
// seedUsers();

// Seed stats
async function seedStats() {
  const users = await User.find();
  for (let i = 0; i <= users.length; i += 1) {
    Stats.create({
      sport: "tennis",
      user: users[i]._id,
      mmr: randomMmr(),
      rating: randomRating(),
      gold: randomGold(),
      silver: randomSilver(),
      bronze: randomBronze(),
    });
  }
}
// seedStats();

// Seed Tournaments


// Seed Brackets
