import 'synbydesign.design';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import AppContainer from './containers/app.container';
import reducers from './reducers';
import promiseDispatcherMiddleware from './middleware/promise-dispatcher.middleware';
import loadedAllDispatcherMiddleware from './middleware/loaded-all-dispatcher.middleware';
import { REQUEST_DATA, RECEIVED_DATA, LOAD_PORTFOLIO_ALL, LOADED_ALL_PORTFOLIO } from './actions/types';

import { Router, Route, Link, IndexRoute } from 'react-router';
import Home from './components/home.component';
import PortfolioDetail from './containers/portfolio-detail.container';


/*
 * FIXME these need to get moved into synbydesign.design
 */
import './scss/typography.scss';
import './scss/masthead.scss';
import './scss/portfolio.scss';
import './scss/portfolio-live.scss';
import './scss/portfolio-3-up.scss';
import './scss/portfolio-image-stack.scss';
import './scss/page-loading.scss';
import './scss/screen-reader.scss';

/*
 * middleware intercepts actions emitted from action creators before
 * the reach reducers
 * they allow you to block, modify, or pass through actions before
 * they hit the reducer
 * they act as a gatekeeper between action creators and reducers
 */
const store = applyMiddleware(
  promiseDispatcherMiddleware(REQUEST_DATA, RECEIVED_DATA),
  loadedAllDispatcherMiddleware(LOAD_PORTFOLIO_ALL, LOADED_ALL_PORTFOLIO),
  ReduxPromise)(createStore)(reducers);

// TEMP

//FIXME...
const { Component } = React;
class NotFound extends Component {
  render() {
    return <div>Not Found 404</div>;
  }
}

//FIXME...
class ChangeLog extends Component {
  render() {
    return <div>This is a changelog that will pull in data Wordpress</div>;
  }
}

class Typography extends Component {
  render() {
    return (
      <div>
        <h1 className="h1">h1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet beatae culpa deleniti
          </h1>

        <h2 className="h2">h2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet beatae culpa deleniti
          </h2>

        <h3 className="h3">h3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet beatae culpa deleniti
          </h3>
        <h4 className="h4">h4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet beatae culpa deleniti
          </h4>
        <h5 className="h5">h5: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet beatae culpa deleniti
          </h5>
        <h6 className="h6">h6: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet beatae culpa deleniti
          </h6>

        <p>Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipisicing elit. <em>Alias amet beatae culpa</em>
          deleniti doloribus esse eveniet, expedita fuga itaque laudantium molestiae nulla obcaecati placeat praesentium
          quisquam repellendus, repudiandae soluta, vel!</p>
        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet beatae culpa deleniti doloribus esse
          eveniet, expedita fuga itaque laudantium molestiae nulla obcaecati placeat praesentium quisquam repellendus,
          repudiandae soluta, vel!
        </small>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home}/>
        <Route path="/detail/:id" component={PortfolioDetail}/>
        <Route path="/changelog" component={ChangeLog}/>
        <Route path="/type" component={Typography}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));