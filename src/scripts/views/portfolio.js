var React = require('react/addons');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioStore = require('../stores/portfolioStore');
var PortfolioItem = require('./porfolioItem');
var $ = require('jquery');

var Portfolio = React.createClass({

  getInitialState: function(){

    return { webItems: [], otherItems: [] }
  },

  componentDidMount: function(){

    var self = this;

    PortfolioActions.loadWeb();
    PortfolioActions.loadOther();
    this.unsubscribe = PortfolioStore.listen(function(type){

      var stateUpdate = {};
      stateUpdate[type + 'Items'] = PortfolioStore.getCollectionByName(type);
      self.setState(stateUpdate);

      //self.props[type + 'Items'] = PortfolioStore.getCollectionByName(type);
      //self.forceUpdate();
    });
  },

  componentWillUnmount: function () {

    this.unsubscribe();
  },

  render: function(){

    var webItems = [];
    var otherItems = [];
    if( $.isArray( this.state.webItems ) === true ){

      webItems = this.state.webItems.map(function(item){

        return (<PortfolioItem item={item} key={Math.random()} />);
      });
    }

    if( $.isArray( this.state.otherItems ) === true ){

      otherItems = this.state.otherItems.map(function(item){

        return (<PortfolioItem item={item} key={Math.random()} />);
      });
    }

    return (<div>
      <h1 className="h3  text-center">Web Design &amp; Development</h1>
      <ul className="portfolio  row  center-xs  start-sm">
        {webItems}
      </ul>
      <h1 className="h3  text-center">Other</h1>
      <ul className="portfolio  row  center-xs  start-sm">
        {otherItems}
      </ul>
    </div>);
  }
});

module.exports = Portfolio;