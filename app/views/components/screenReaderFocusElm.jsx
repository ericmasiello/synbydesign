'use strict';

var React = require('react/addons');

/*
 * Kludge, in order to avoid the screen reader reading content twice (caused by having a tabIndex value set,
 * but still needing a spot that the screen to scroll to focus on when the user clicks the, for example, "About" link,
 * I'll focus/scroll to the empty span tag (below) and that way the content will just above what needs to be read, thus
 * only reading the text inside the content below the empty span once.
 */
var ScreenReaderFocusElm = React.createClass({

  propTypes: {
    elmId: React.PropTypes.number.isRequired
  },

  render: function(){

    return (
      <span id={this.props.elmId} tabIndex="-1"></span>
    );
  }
});

module.exports = ScreenReaderFocusElm;