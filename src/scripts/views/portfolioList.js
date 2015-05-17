var React = require('react/addons');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioStore = require('../stores/portfolioStore');
var PortfolioItem = require('./portfolioItem');
var jQuery = require('jquery');
var UIIDs = require('../props/uiIDs');

var _mapDataToPortfolioItems = function(items, type){

  var portfolioItems;

  if( jQuery.isArray( items ) === true ){

    portfolioItems = items.map(function(item){

      return (<PortfolioItem item={item} type={type} key={Math.random()} />);
    });
  }

  return portfolioItems;
};

var PortfolioList = React.createClass({

  getInitialState: function(){

    return this.getStateFromStore();
  },

  getStateFromStore: function () {

    return {
      webItems: PortfolioStore.getCollectionByCategory('web'),
      otherItems: PortfolioStore.getCollectionByCategory('other')
    };
  },

  setStateFromStore: function(){

    this.setState(this.getStateFromStore());
  },

  componentDidMount: function(){

    if( PortfolioStore.hasLoadedAll() === false ){

      PortfolioActions.LOAD_ALL();
      this.unsubscribe = PortfolioStore.listen(this.setStateFromStore);
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

    return (<div id={UIIDs.portfolioList}>
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