var Reflux = require('reflux');

var PortfolioActions = Reflux.createActions({
  loadWeb: {
    asyncResult: true //automatically defines completed and failed
  }
});

module.exports = PortfolioActions;