'use strict';

import React from 'react';
import NProgress from 'nprogress';

export default React.createClass({

  propTypes: {
    loading: React.PropTypes.bool.isRequired,
    percentageComplete: React.PropTypes.number
  },

  componentDidMount: function () {

    this.node = this.getDOMNode();
    this.renderNProgress();
  },

  renderNProgress: function () {

    //create reference to progress instance
    this.progress = NProgress.configure({});

    // start a new React render tree with our node and the children
    // passed in from above, this is the other side of the portal.
    // Not sure if I need this or not...
    // Got this approach from: https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md
    // See also: https://github.com/ryanflorence/react-training/blob/gh-pages/code/Dialog/Dialog.js
    React.render(<div />, this.node);
  },

  render: function () {

    if (this.progress) {

      /**
       * If we are now in a loading state and we haven't rendered the progress
       * plugin yet, we need to call .start() to add it ot the DOM
       */
      if (this.props.loading === true && this.progress.isRendered() === false) {

        this.progress.start();

      } else if (this.props.loading === false) {

        this.progress.done();

      } else {

        this.progress.inc(this.props.percentageComplete);
      }
    }

    return (
      <div />
    );
  }
});
