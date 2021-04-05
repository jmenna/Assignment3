import {
  ReasonPhrases,
  StatusCodes,
} from 'http-status-codes';
import {
  epochHandler,
  getEpochTimeLocale,
} from 'epoch-handler';

const express = require('express');
const { checkBody, validationResult } = require('express-validator/check');

const app = express();

app.any('/', checkBody('date-validation').exists(), (req, res) => {
  try {
    validationResult(req).throw();
    try {
      epochHandler({
        epoch: 'date-validation' || getEpochTimeLocale() + 50,
        type: 'time_until',
        output: 'seconds',
      });

      if (epochHandler.output > 300) {
        validationResult(req).throw();
      }
    } catch (err) {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .send(ReasonPhrases.UNAUTHORIZED);
    }
  } catch (err) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .send(ReasonPhrases.UNAUTHORIZED);
  }
});

module.exports = (request, response, next) => {
  request.PROPERTY = 'dateValidation';
  next();
};
