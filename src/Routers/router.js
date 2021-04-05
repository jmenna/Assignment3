const app = require('express').Router();
const getRandomNumber = require('../Utilities/randomNumberGenerator');

// eslint-disable-next-line no-unused-vars
app.all('/', async (req, res, next) => {
  const randomInt = getRandomNumber(1, 2);
  if (randomInt === 1) {
    res.send('Hello World');
  }
  if (randomInt === 2) {
    try {
      throw new Error('Oops');
    } catch {
      const err = new Error('Oops');
      next(err);
    }
  }
});

module.exports = app;
