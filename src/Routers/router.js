const router = require('express').Router();

router.all('/', (req, res) => {
  const randomInt = Math.floor(Math.random() * 1);
  if (randomInt === 0) {
    res.send('Hello World');
  }
  if (randomInt === 1) {
    res.throw('oops');
  }
});

module.exports = router;
