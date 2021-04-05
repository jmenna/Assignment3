const express = require('express');
const bodyParser = require('body-parser');
const deleteMiddleware = require('./Middlewares/deleteMiddleware');
// const loggerMiddleware = require('./Middlewares/logger');
// const dateValidation = require('./Middlewares/dateValidation');
const router = require('./Routers/router');
// const errorMiddleware = require('./Middlewares/errorHandler');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(deleteMiddleware);
// app.use(dateValidation);
// app.use(loggerMiddleware);
app.use(router);
// app.use(errorMiddleware);

app.listen(8080);
