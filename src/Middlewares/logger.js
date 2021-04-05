const winston = require('winston');
const express = require('express');
const { ReasonPhrases, StatusCodes } = require('http-status-codes');

const app = express();

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

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
