/** @jsx React.DOM */
var React = require('react/addons');
var Router = require('react-router');

/* Load views */
var Navigation = require('./views/navigation');
var PortfolioList = require('./views/portfolioList');
var PortfolioDetail = require('./views/portfolioDetail');
var NotFound = require("./views/404");
var LoadingStatus = require('./views/loadingStatus');

/* Load Router */
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({

  render: function(){

    return (<div>
      <LoadingStatus />
      <Navigation />
      <div className="container-fluid">
        <RouteHandler/>
      </div>
    </div>);
  }
});

var routes = (
    <Route handler={App}>
      <DefaultRoute handler={PortfolioList}/>
      <Route name="detail" path="/:type/detail/:id" handler={PortfolioDetail}/>
      <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});