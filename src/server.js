const express = require('express');

const app = express();

app.listen(8080);

var parseBody = function (req, res, next)
{
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
}

var logRequest = function (req, res, next)
{
  
}