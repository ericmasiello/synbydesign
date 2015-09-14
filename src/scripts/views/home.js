'use strict';

var React = require('react');
var DocumentTitle = require('react-document-title');
var About = require('./components/about');
var PortfolioList = require('./components/portfolioList');
var Navigation = require('./components/navigation');
var AppConsts = require('../consts/app');
var UIStore = require('../stores/uiStore');

var Home = React.createClass({

  componentDidMount: function(){

    /*
     * Only set focus on the masthead area if this isn't your first time loading the page
     * this done purely for cosmetic reasons so the page's header doesn't have that
     * pink outline around it when you visit the site for the very first time
     */
    if( UIStore.isInitialLoad() === false ){
      setTimeout(function(){
        document.getElementById(AppConsts.UIID.masthead).focus();
      });
    }
  },

  render: function () {

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

module.exports = Home;