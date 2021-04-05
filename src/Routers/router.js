const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const app = require('express').Router();

app.all('/', async (req, res, next) => {
  const randomInt = Math.floor(Math.random() * 2);
  if (randomInt === 0) {
    res.send('Hello World');
  }
  if (randomInt === 1) {
    try {
      throw new Error('Oops');
    } catch {
      const err = new Error('Oops');
      next(err);
    }
  }
});

module.exports = app;
