const winston = require('winston');
const express = require('express');

const app = express();

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

// eslint-disable-next-line no-unused-vars
module.exports = app.all('/', (req, res, next) => {
  const currentDate = Math.trunc(Date.now() / 1000);
  logger.log('info', 'log', {
    timestamp: currentDate,
    method: req.method,
    url: req.url,
    body: req.body,
    query: req.query,
    headers: req.headers,
    dateValidation: req.dateValidation,
  });
  next();
});
