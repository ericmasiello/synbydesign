require('synbydesign.design');

import React from 'react';
import { render } from 'react-dom'
import jQueryScrollTo from 'jquery.scrollto';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import AppConsts from './consts/app';

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
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.getElementById('app'))


