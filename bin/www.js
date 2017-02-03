/* @flow */
require('../app/config/babel');
const winston = require('winston');
const app = require('../app/server');
const PORT = require('../app/config').PORT;

app.set('port', PORT);

app.listen(app.get('port'), () => winston.info(`Server started on port ${app.get('port').toString()}`));
