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

module.exports = app.all('/', (req, res) => {
  logger.log('info', {
    method: req.method,
    body: req.body,
  });
});
