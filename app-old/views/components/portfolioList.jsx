'use strict';

import React from 'react';
import PortfolioActions from '../../actions/portfolioActions';
import PortfolioStore from '../../stores/portfolioStore';
import PortfolioItem from './portfolioItem';
import AppConsts from '../../consts/app';
import ScreenReaderFocusElm from './screenReaderFocusElm';

const mapDataToPortfolioItems = function(items, type){

  let portfolioItems;

  if( Array.isArray( items ) === true ){

    portfolioItems = items.map(function(item){

      return (<PortfolioItem item={item} type={type} key={Math.random()} />);
    });
  }

  return portfolioItems;
};

export default React.createClass({

  getInitialState: function(){

    return this.getStateFromStore();
  },

  getStateFromStore() {

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

  componentWillUnmount() {

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

    const webItems = mapDataToPortfolioItems(this.state.webItems, 'web');
    const designItems = mapDataToPortfolioItems(this.state.designItems, 'design');
    const otherItems = mapDataToPortfolioItems(this.state.otherItems, 'other');

    let webContent;
    let designContent;
    let otherContent;

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

    return (<section>
      <ScreenReaderFocusElm elmId={AppConsts.UIID.portfolioList} />
      {webContent}
      {designContent}
      {otherContent}
    </section>);
  }
});