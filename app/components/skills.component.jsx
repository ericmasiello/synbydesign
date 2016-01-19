'use strict';

import React from 'react';

function Skills(props) {

    let bulletClassNames = typeof props.bulletClassNames === 'string' ? props.bulletClassNames : '';
    bulletClassNames = `${bulletClassNames} bullet`;

    const skills = ( props.skills ) ? props.skills.map(function (tag) {
      return (<li key={tag.name} role="presentation">
        <span className={bulletClassNames} aria-hidden="true"></span>{' ' + tag.name}
      </li>);
    }) : null;

    return (<ul className={props.classNames} aria-label={'Skills used to make ' + props.title}>
      {skills}
    </ul>);
}

Skills.propTypes = {
  bulletClassNames: React.PropTypes.string,
  classNames: React.PropTypes.string,
  skills: React.PropTypes.array,
  title: React.PropTypes.string
};

export default Skills;