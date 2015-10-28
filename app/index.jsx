require('synbydesign.design');
require('./app.scss');

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
import { Router, Route, Link } from 'react-router'

const About = React.createClass({
  render(){
    return <div>About</div>
  }
});

const Inbox = React.createClass({
  render(){
    return <div>Inbox</div>
  }
});

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({

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

  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {/*
         next we replace `<Child>` with `this.props.children`
         the router will figure out the children for us
         */}
        <div>Before</div>
        {this.props.children}
        <div>After</div>
      </div>
    )
  }
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={Home} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.getElementById('app'))


