/* @flow */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const MORGAN_CONFIG = require('./config').MORGAN_CONFIG;

const uiRoutes = require('./server/ui');
const apiRoutes = require('./server/api');

const app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');

app.use(morgan(MORGAN_CONFIG));
app.use(bodyParser.urlencoded({
  extended: false, // makes parsing simpler and more secure
}));

app.use('/api/v1', apiRoutes);
app.use('/', uiRoutes);

module.exports = app;
