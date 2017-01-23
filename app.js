/* @flow */
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app: express$Application = express();

app.use(morgan(process.env.morgan));

module.exports = app;
