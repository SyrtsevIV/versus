const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');

const profileRouter = require('./routes/profile');
const compareRouter = require('./routes/compare');

const app = express();

const PORT = process.env.PORT ?? 3001;

mongoose.connect('mongodb://localhost:27017/Versus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/profile', profileRouter);
app.use('/compare', compareRouter);

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT);
});
