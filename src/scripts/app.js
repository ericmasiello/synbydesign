/** @jsx React.DOM */
var React = require('react/addons');
var Navigation = require('./views/navigation');
var Portfolio = require('./views/portfolio');
var LoadingStatus = require('./views/loadingStatus');
//console.log('hello world');

React.render(
  <div>
    <LoadingStatus />
    <Navigation />

    <div className="container-fluid">
      <Portfolio />
    </div>

  </div>,
  document.getElementById('app'));