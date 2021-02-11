const express = require('express');

const multer = require('multer');
const path = require('path');

const appDir = path.dirname(require.main.filename);

const User = require('../models/User');
const Stats = require('../models/Stats');
const Match = require('../models/Match');
const Bracket = require('../models/Bracket');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const stats = await Stats.findOne({ user: id });
    const allPlayerRanks = await Stats.find();
    const allPlayerValue = await allPlayerRanks.length;
    allPlayerRanks.sort((a, b) => b.mmr - a.mmr);
    const user = await User.findById(id);
    let rating = allPlayerRanks.findIndex((el) => {
      return String(el.user) == id
    });
    rating += 1;
    res.json({ stats, rating, user, allPlayerValue });
  } catch (error) {
    res.send('Не нашел такого юзера =(');
  }
});

// Storage для хранения загруженных картинок
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appDir + '/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, 'image-' + Date.now() + path.extname(file.originalname)
    )
  }
})
 
var upload = multer({ storage })

router.post('/upload/:id', upload.single('filedata'), async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, { avatar: req.file.filename }, { new: true });
    res.json(user);
  } catch (error) {
    console.log('Что то пошло не так, upload');
  }
});

router.get('/history/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const matches = await Match.find({ ended: true }).populate('player1').populate('player2');
    const userMatches = matches.filter((el) => { 
      return String(el.player1?._id) === id || String(el.player2?._id) === id
    });
    res.json(userMatches.slice(0,5));
  } catch (error) {
    console.log(error);
  }
});

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const login = req.body.changeLogin;
    const email = req.body.changeEmail;
    const user = await User.findByIdAndUpdate(id, { login, email });
    res.json(user);
  } catch (error) {
    // Что отправить в качестве ошибки?
    res.send('Что то пошло не так, id');
  }
});

module.exports = router;
