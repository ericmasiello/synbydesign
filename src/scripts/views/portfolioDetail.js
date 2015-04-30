var React = require('react/addons');
var Router = require('react-router');
//var PortfolioActions = require('../actions/portfolioActions');
var PortfolioStore = require('../stores/portfolioStore');
//var PortfolioItem = require('./porfolioItem');
//var $ = require('jquery');

var PortfolioDetail = React.createClass({

  mixins: [ Router.Navigation, Router.State ],

  getInitialState: function(){

    //return { portfolioDetails: {} };

    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    var id = this.getParams().id;

    return {
      detail: PortfolioStore.getItem(id),
      type: this.getParams().type
    };
  },

  componentDidMount: function(){

  },

  componentWillUnmount: function(){

  },

  render: function(){

    return (<div>
      <h1 className="h3  text-center">I am the detail screen</h1>
    </div>);
  }
});

module.exports = PortfolioDetail;