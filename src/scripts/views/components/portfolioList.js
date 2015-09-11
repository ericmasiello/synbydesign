'use strict';

var React = require('react/addons');
var PortfolioActions = require('../../actions/portfolioActions');
var PortfolioStore = require('../../stores/portfolioStore');
var PortfolioItem = require('./portfolioItem');
var jQuery = require('jquery');
var AppConsts = require('../../consts/app');

var mapDataToPortfolioItems = function(items, type){

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
      designItems: PortfolioStore.getCollectionByCategory('design'),
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

    var webItems = mapDataToPortfolioItems(this.state.webItems, 'web');
    var designItems = mapDataToPortfolioItems(this.state.designItems, 'design');
    var otherItems = mapDataToPortfolioItems(this.state.otherItems, 'other');

    var webContent;
    var designContent;
    var otherContent;

    if( webItems.length > 0 ){
      webContent = (
        <div>
          <h1 className="h3  text-center">Web Design &amp; Development</h1>
          <ul className="portfolio  row  center-xs  start-sm">
            {webItems}
          </ul>
        </div>
      );
    }

    if( designItems.length > 0 ){
      designContent = (
        <div>
          <h1 className="h3  text-center">Illustration, Logos, &amp; Flyers</h1>
          <ul className="portfolio  row  center-xs  start-sm">
            {designItems}
          </ul>
        </div>
      );
    }

    if( otherItems.length > 0 ){
      otherContent = (
        <div>
          <h1 className="h3  text-center">Other</h1>
          <ul className="portfolio  row  center-xs  start-sm">
            {otherItems}
          </ul>
        </div>
      );
    }

    return (<div id={AppConsts.UIID.portfolioList} tabIndex="0">
      {webContent}
      {designContent}
      {otherContent}
    </div>);
  }
});

module.exports = PortfolioList;