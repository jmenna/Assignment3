const express = require('express');

const app = express();

app.all('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
