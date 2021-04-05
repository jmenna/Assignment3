const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const router = require('express').Router();

router.all('/', (req, res) => {
  const randomInt = Math.floor(Math.random() * 2);
  if (randomInt === 0) {
    res.send('Hello World');
  }
  if (randomInt === 1) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
