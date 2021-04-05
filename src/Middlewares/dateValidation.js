const { ReasonPhrases, StatusCodes } = require('http-status-codes');

module.exports = ('/', (req, res, next) => {
  try {
    const dateValidationParam = parseInt(req.query.datevalidation, 10);
    const currentDate = Math.trunc(Date.now() / 1000);
    if (currentDate - dateValidationParam < 300) {
      req.dateValidation = currentDate;
      next();
    } else {
      throw new Error('UNAUTHORIZED');
    }
  } catch {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .send(ReasonPhrases.UNAUTHORIZED);
  }
});
