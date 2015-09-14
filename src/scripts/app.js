'use strict';

var React = require('react/addons');
var Router = require('react-router');
var jQueryScrollTo = require('jquery.scrollto');

var AppConsts = require('./consts/app');

/* Load views */
var Home = require("./views/home");
var PortfolioDetail = require('./views/detail');
var NotFound = require("./views/404");
var LoadingStatus = require('./views/components/loadingStatus');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

/* Load stores */
var UIStore = require('./stores/uiStore');

/* Load actions */
var UIActions = require('./actions/uiActions');

/* Load Router */
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({

  backToTop: function(e){

    e.preventDefault();

    window.setTimeout(function(){

      jQueryScrollTo('#' + AppConsts.UIID.masthead, 500);
      document.getElementById(AppConsts.UIID.logo).focus();
    }, 0);
  },

  getInitialState: function(){

    return {
      loading: false
    };
  },

  setStateFromStore: function(){

    this.setState({
      loading: UIStore.isLoading()
    });
  },

  componentDidMount: function(){

    this.unsubscribe = UIStore.listen(this.setStateFromStore);
    UIActions.APP_LOADED();
  },

  componentWillUnmount: function(){

    this.unsubscribe();
  },

  render: function(){

    var route = window.location.hash;

    //console.log("loadingState on app", this.state.loading);

    return (<div aria-atomic="true" aria-live="polite" aria-busy={this.state.loading} >
      <LoadingStatus loading={this.state.loading} percentageComplete={UIStore.getLoadingPercentageComplete()} />
      <ReactCSSTransitionGroup transitionName="example">
        <RouteHandler key={route} loadingState={this.state.loading} />
        <div className="text-center mtl">
          <a href="#" onClick={this.backToTop}>Back to top</a>
        </div>
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
