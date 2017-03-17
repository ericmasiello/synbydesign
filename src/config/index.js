/* @flow */
require('dotenv').config();
const winston = require('winston');

winston.level = process.env.winston || 'debug';

export const MORGAN_CONFIG: string = process.env.morgan || '';
export const PORT: number = parseInt(process.env.PORT, 10) || 3000;
