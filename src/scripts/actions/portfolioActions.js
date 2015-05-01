var Reflux = require('reflux');

var PortfolioActions = Reflux.createActions({
  loadWeb: {
    asyncResult: true //automatically defines completed and failed
  },
  loadOther: {
    asyncResult: true //automatically defines completed and failed
  },
  loadSingleItem: {
    asyncResult: true
  }
});

module.exports = PortfolioActions;