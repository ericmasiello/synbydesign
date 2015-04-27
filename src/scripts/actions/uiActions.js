var Reflux = require('reflux');

var UIActions = Reflux.createActions([
  'load',
  'completedLoading'
]);

module.exports = UIActions;