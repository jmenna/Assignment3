const express = require('express');
const bodyParser = require('body-parser');
// const deleteMiddleware = require('./Middlewares/deleteMiddleware');
// const logger = require('./Middlewares/logger');
// const dateValidation = require('./Middlewares/dateValidation');
const router = require('./Routers/router');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// app.use(deleteMiddleware);
// app.use(logger);
// app.use(dateValidation);
app.use(router);

app.listen(8080);
