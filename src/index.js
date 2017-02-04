/* @flow */
require('./config/babel');
const winston = require('winston');
const app = require('./server');
const PORT = require('./config').PORT;

app.set('port', PORT);

app.listen(app.get('port'), () => winston.info(`Server started on port ${app.get('port').toString()}`));
