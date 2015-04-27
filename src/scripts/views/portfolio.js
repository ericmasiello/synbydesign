var React = require('react/addons');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioStore = require('../stores/portfolioStore');
var PortfolioItem = require('./porfolioItem');
var $ = require('jquery');

var Portfolio = React.createClass({

  componentDidMount: function(){

    var self = this;

    PortfolioActions.loadWeb();
    this.unsubscribe = PortfolioStore.listen(function(items){

      self.props.items = items;
      self.forceUpdate();
    });
  },

  componentWillUnmount: function () {

    this.unsubscribe();
  },

  render: function(){

    var webItems = [];
    if( $.isArray( this.props.items ) === true ){

      webItems = this.props.items.map(function(item){

        return (<PortfolioItem item={item} />);
      });
    }

    return (<div>
      <h1 className="h3  text-center">Web Design &amp; Development</h1>
      <ul className="portfolio  row  center-xs  start-sm">
        {webItems}
      </ul>
    </div>);
  }
});

module.exports = Portfolio;