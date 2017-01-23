/* @flow */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan(process.env.morgan));
app.use(bodyParser.urlencoded({
  extended: false, // makes parsing simpler and more secure
}));

app.use(routes);

module.exports = app;
