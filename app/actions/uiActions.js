var Reflux = require('reflux');

var UIActions = Reflux.createActions([
  'LOAD',
  'COMPLETED_LOADING',
  'APP_LOADED'
]);

module.exports = UIActions;