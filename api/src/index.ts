const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

import app from './app';

app.listen(app.get('port'), () =>
  console.log(`Listening on port: ${app.get('port')}`),
);
