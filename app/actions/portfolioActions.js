var Reflux = require('reflux');

var PortfolioActions = Reflux.createActions({
  LOAD_ALL: {
    asyncResult: true //automatically defines completed and failed
  },
  LOAD_SINGLE: {
    asyncResult: true
  }
});

module.exports = PortfolioActions;