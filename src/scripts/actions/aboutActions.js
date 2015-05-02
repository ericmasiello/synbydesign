var Reflux = require('reflux');

var AboutActions = Reflux.createActions({
    'LOAD': {
        asyncResult: true
    }
});

module.exports = AboutActions;