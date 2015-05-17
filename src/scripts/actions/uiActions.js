var Reflux = require('reflux');

var UIActions = Reflux.createActions([
  'LOAD',
  'COMPLETED_LOADING'
]);

module.exports = UIActions;