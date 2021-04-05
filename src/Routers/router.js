const express = require('express');

const app = express();

app.all('/', (req, res) => {
  const randomInt = Math.floor(Math.random() * 2);
  if (randomInt === 0) {
    res.send('Hello World');
  }
  if (randomInt === 1) {
    res.throw('oops');
  }
});

module.exports = app;
