var React = require('react/addons');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioStore = require('../stores/portfolioStore');
var PortfolioItem = require('./portfolioItem');
var $ = require('jquery');

var _mapDataToPortfolioItems = function(items, type){

  var portfolioItems;

  if( $.isArray( items ) === true ){

    portfolioItems = items.map(function(item){

      return (<PortfolioItem item={item} type={type} key={Math.random()} />);
    });
  }

  return portfolioItems;
};

var PortfolioList = React.createClass({

  getInitialState: function(){

    return { webItems: [], otherItems: [] }
  },

  getStateFromStore: function () {

    return {
      webItems: PortfolioStore.getCollectionByCategory('web'),
      otherItems: PortfolioStore.getCollectionByCategory('other')
    };
  },

  componentDidMount: function(){

    var self = this;

    if( PortfolioStore.hasLoadedAll() === false ){

      PortfolioActions.LOAD_ALL();
      self.unsubscribe = PortfolioStore.listen(function(){

        self.setState(self.getStateFromStore());
      });

    } else {

      self.setState(self.getStateFromStore());
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

    var webItems = _mapDataToPortfolioItems(this.state.webItems, 'web');
    var otherItems = _mapDataToPortfolioItems(this.state.otherItems, 'other');

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

module.exports = PortfolioList;