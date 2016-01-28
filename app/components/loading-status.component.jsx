import React, { Component } from 'react';
import { findDOMNode, render } from 'react-dom';
import NProgress from 'nprogress';
import isAppLoading from '../util/is-app-loading.util';

export default React.createClass({

  propTypes: {
    appLoading: React.PropTypes.object
  },

  componentDidMount() {
    'use strict';
    this.node = findDOMNode(this);
    this.renderNProgress();
  },

  renderNProgress() {
    'use strict';
    //create reference to progress instance
    this.progress = NProgress.configure({});

    // start a new React render tree with our node and the children
    // passed in from above, this is the other side of the portal.
    // Not sure if I need this or not...
    // Got this approach from: https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md
    // See also: https://github.com/ryanflorence/react-training/blob/gh-pages/code/Dialog/Dialog.js
    render(<div />, this.node);
  },

  render() {
    'use strict';
    //console.log('called render');
    if (this.progress) {

      const { loadedRequests,activeRequests } = this.props.appLoading;
      const isLoading = isAppLoading(this.props.appLoading);

      /**
       * If we are now in a loading state and we haven't rendered the progress
       * plugin yet, we need to call .start() to add it ot the DOM
       */
      if (isLoading === true && this.progress.isRendered() === false) {

        this.progress.start();

      } else if (isLoading === false) {

        this.progress.done();

      } else {

        this.progress.inc(loadedRequests/activeRequests);
      }
    }

    return (
      <div />
    );
  }
});