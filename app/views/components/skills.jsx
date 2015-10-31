'use strict';

import React from 'react';

export default React.createClass({

  propTypes: {
    bulletClassNames: React.PropTypes.string,
    classNames: React.PropTypes.string,
    skills: React.PropTypes.array,
    title: React.PropTypes.string
  },

  render: function () {

    var bulletClassNames = typeof this.props.bulletClassNames === "string" ? this.props.bulletClassNames : "";
    bulletClassNames = bulletClassNames + " bullet";

    var skills = this.props.skills.map(function (tag) {
      return (<li key={Math.random()} role="presentation">
        <span className={bulletClassNames} aria-hidden="true"></span>{' ' + tag.name}
      </li>);
    });

    return (<ul className={this.props.classNames} aria-label={'Skills used to make ' + this.props.title}>
      {skills}
    </ul>);
  }
});