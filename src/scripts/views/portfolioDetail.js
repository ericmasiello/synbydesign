var React = require('react/addons');
//var PortfolioActions = require('../actions/portfolioActions');
//var PortfolioStore = require('../stores/portfolioStore');
//var PortfolioItem = require('./porfolioItem');
//var $ = require('jquery');

var PortfolioDetail = React.createClass({

  //getInitialState: function(){
  //
  //  return { webItems: [], otherItems: [] }
  //},

  componentDidMount: function(){

    //var self = this;
    //
    //PortfolioActions.loadWeb();
    //PortfolioActions.loadOther();
    //this.unsubscribe = PortfolioStore.listen(function(type){
    //
    //  var stateUpdate = {};
    //  stateUpdate[type.toLowerCase() + 'Items'] = PortfolioStore.getCollectionByName(type);
    //  self.setState(stateUpdate);
    //});
  },

  componentWillUnmount: function () {

    //this.unsubscribe();
  },

  render: function(){

    return (<div>
      <h1 className="h3  text-center">I am the detail screen</h1>
    </div>);
  }
});

module.exports = PortfolioDetail;