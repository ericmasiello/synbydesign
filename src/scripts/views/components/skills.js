'use strict';

var React = require('react/addons');

var Skills = React.createClass({

  propTypes: {
    classNames: React.PropTypes.classNames,
    skills: React.PropTypes.array,
    title: React.PropTypes.string
  },

  render: function(){

    var skills = this.props.skills.map(function(tag){
      return (<li key={Math.random()}>{tag.name}</li>);
    });

    return (<ul className={this.props.classNames} aria-label={'Skills used to make ' + this.props.title}>
      {skills}
    </ul>);
  }
});

module.exports = Skills;