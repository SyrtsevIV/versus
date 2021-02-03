const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

const PORT = process.env.PORT ?? 3001;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT);
});
