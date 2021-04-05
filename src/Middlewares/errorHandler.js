const { getReasonPhrase, ReasonPhrases, StatusCodes } = require('http-status-codes');

module.exports = (err, req, res, next) => {
  res.status(500).send(`We're sorry, the error was: ${err.message}`);
};
