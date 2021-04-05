const { ReasonPhrases, StatusCodes } = require('http-status-codes');

const express = require('express');
const { checkBody, validationResult } = require('express-validator');

const app = express();

module.exports = app.all('/', (req, res) => {
  try {
    const dateValidationParam = parseInt(req.query.datevalidation, 10);
    const currentDate = Date.now() / 1000;

    if (currentDate - dateValidationParam < 300) {
      req.dateValidation = currentDate;
    } else {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .send(ReasonPhrases.UNAUTHORIZED);
    }
  } catch {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .send(ReasonPhrases.UNAUTHORIZED);
  }
});
