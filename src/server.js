const express = require('express');
const bodyparser = require('./Middlewares/bodyParser')

const app = express();

app.use(bodyparser)

app.listen(8080);

var logRequest = function (req, res, next)
{
  
}