const express = require('express');
const deleteMiddleware = require('./Middlewares/deleteMiddleware');

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(8080);

const logRequest = function (req, res, next) {

};
