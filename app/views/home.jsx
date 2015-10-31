'use strict';

import React from 'react';
import DocumentTitle from 'react-document-title';
import About from './components/about';
import PortfolioList from './components/portfolioList';
import Navigation from './components/navigation';
import AppConsts from '../consts/app';
import UIStore from '../stores/uiStore';

export default React.createClass({

  componentDidMount() {

    /*
     * Only set focus on the masthead area if this isn't your first time loading the page
     * this done purely for cosmetic reasons so the page's header doesn't have that
     * pink outline around it when you visit the site for the very first time
     */
    if (UIStore.isInitialLoad() === false) {
      setTimeout(function () {
        document.getElementById(AppConsts.UIID.masthead).focus();
      });
    }
  },

  render() {

    return (
      <div>
        <DocumentTitle title={AppConsts.TITLE}/>
        <Navigation view={'home'}/>

        <div className="container-fluid">
          <About/>
          <PortfolioList />
        </div>
      </div>
    );
  }
});