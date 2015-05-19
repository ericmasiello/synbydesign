/** @jsx React.DOM */
var React = require('react/addons');
var Router = require('react-router');

/* Load views */
//var Navigation = require('./views/navigation');
//var PortfolioList = require('./views/portfolioList');
var Home = require("./views/home");
var PortfolioDetail = require('./views/portfolioDetail');
var NotFound = require("./views/404");
var LoadingStatus = require('./views/loadingStatus');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

/* Load Router */
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({

  render: function(){

    var route = window.location.hash;

    return (<div>
      <LoadingStatus />
      <ReactCSSTransitionGroup transitionName="example">
        <RouteHandler key={route} />
      </ReactCSSTransitionGroup>
    </div>);
  }
});

var routes = (
    <Route handler={App}>
      <DefaultRoute name="home" handler={Home}/>
      <Route name="detail" path="/:id" handler={PortfolioDetail}/>
      <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});