var parseBody = function (req, res, next)
{
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
}