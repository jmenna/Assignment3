import {
  ReasonPhrases,
  StatusCodes,
} from 'http-status-codes';

const express = require('express');

const app = express();

app.delete('/', (req, res) => {
  res
    .status(StatusCodes.METHOD_NOT_ALLOWED)
    .send(ReasonPhrases.METHOD_NOT_ALLOWED);
});
