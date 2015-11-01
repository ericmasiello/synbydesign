require('synbydesign.design');

import React from 'react';
import { render } from 'react-dom'
import jQueryScrollTo from 'jquery.scrollto';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

// Load stores
import UIStore from './stores/uiStore';
// Load actions
import UIActions from './actions/uiActions';
// Load Consts
import AppConsts from './consts/app';
// Load Views

import Home from './views/home';
import PortfolioDetail from './views/detail';
import NotFound from './views/404';
import LoadingStatus from './views/components/loadingStatus';

// First we import some components...
import { Router, Route, Link, IndexRoute } from 'react-router'

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({

  backToTop(e){

    e.preventDefault();

    window.setTimeout(function(){

      jQueryScrollTo('#' + AppConsts.UIID.masthead, 500);
      document.getElementById(AppConsts.UIID.logo).focus();
    }, 0);
  },

  getInitialState(){

    return {
      loading: false
    };
  },

  setStateFromStore(){

    this.setState({
      loading: UIStore.isLoading()
    });
  },

  componentDidMount(){

    this.unsubscribe = UIStore.listen(this.setStateFromStore);
    UIActions.APP_LOADED();
  },

  componentWillUnmount(){

    this.unsubscribe();
  },

  render() {

    return (
      <div aria-atomic="true" aria-live="polite" aria-busy={this.state.loading} >
        <LoadingStatus loading={this.state.loading} percentageComplete={UIStore.getLoadingPercentageComplete()} />
        <div>
          { React.cloneElement(this.props.children, {loadingState: this.state.loading}) }
        </div>
        <div className="text-center mtl">
          <a href="#" onClick={this.backToTop}>Back to top</a>
        </div>
      </div>
    )
  }
});

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/detail/:type/:id" component={PortfolioDetail} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('app'));


