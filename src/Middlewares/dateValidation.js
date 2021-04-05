const { ReasonPhrases, StatusCodes } = require('http-status-codes');

const express = require('express');
const { checkBody, validationResult } = require('express-validator');

const app = express();

/* app.any('/', checkBody('date-validation').exists(), (req, res) => {
  try {
    validationResult(req).throw();
    if (checkBody('date-validation').isNaN()) {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .send(ReasonPhrases.UNAUTHORIZED);
    } else {
      const currentDate = Date.now();
    }
  } catch (err) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .send(ReasonPhrases.UNAUTHORIZED);
  }
}); */

/* module.exports = app.all('/', (req, res) => {
  if (req.query.date.exists()) {
    if (req.query.date.isNaN()) {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .send(ReasonPhrases.UNAUTHORIZED);
    } else {
      const dateValidationParam = parseInt(req.query.datevalidation, 10);
      const currentDate = Date.now();

      if (currentDate - dateValidationParam < 300) {
        req.dateValidation = currentDate;
      } else {
        res
          .status(StatusCodes.UNAUTHORIZED)
          .send(ReasonPhrases.UNAUTHORIZED);
      }
    }
  } else {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .send(ReasonPhrases.UNAUTHORIZED);
  }
}); */

module.exports = app.all('/', (req, res) => {
  try {
    const dateValidationParam = parseInt(req.query.datevalidation, 10);
    const currentDate = Date.now();

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
