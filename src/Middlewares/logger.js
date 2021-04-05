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

module.exports = ('/', (req, res) => {
  logger.log('info', {
    method: req.method,
    body: req.body,
  });
  res
    .status(StatusCodes.OK)
    .send(ReasonPhrases.OK);
});
