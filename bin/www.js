/* @flow */
require('../config/babel');
const app = require('../app');
const PORT = require('../config').PORT;

app.set('port', PORT);

app.listen(app.get('port'), () => console.log(`Server started on port ${app.get('port').toString()}`));
