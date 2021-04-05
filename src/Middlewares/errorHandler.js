module.exports = (err, req, res, next) => {
  req.status(500).send(`We're sorry, the error was: ${err.message}`);
};
