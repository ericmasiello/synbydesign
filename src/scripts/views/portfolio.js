var React = require('react/addons');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioStore = require('../stores/portfolioStore');
var PortfolioItem = require('./portfolioItem');
var $ = require('jquery');

var _mapDataToPortfolioItems = function(items){

  var portfolioItems;

  if( $.isArray( items ) === true ){

    portfolioItems = items.map(function(item){

      return (<PortfolioItem item={item} key={Math.random()} />);
    });
  }

  return portfolioItems;
};

var Portfolio = React.createClass({

  getInitialState: function(){

    return { webItems: [], otherItems: [] }
  },

  componentDidMount: function(){

    var self = this;

    if( PortfolioStore.hasLoadedData() === false ){

      PortfolioActions.loadWeb();
      PortfolioActions.loadOther();

      self.unsubscribe = PortfolioStore.listen(function(type){

        var stateUpdate = {};
        stateUpdate[type.toLowerCase() + 'Items'] = PortfolioStore.getCollectionByName(type);
        self.setState(stateUpdate);
      });

    } else {

      self.setState({
        'webItems': PortfolioStore.getCollectionByName('WEB'),
        'otherItems': PortfolioStore.getCollectionByName('OTHER')
      });
    }
  },

  componentWillUnmount: function () {

    /*
     * the unsubscribe property is only set when initially loading the component. Afterward
     * the data has been stored in our portfolio store so there's no need to create
     * listeners for actions
     */
    if( typeof this.unsubscribe === 'function'){

      this.unsubscribe();
    }
  },

  render: function(){

    var webItems = _mapDataToPortfolioItems(this.state.webItems);
    var otherItems = _mapDataToPortfolioItems(this.state.otherItems);

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