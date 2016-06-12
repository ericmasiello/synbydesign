'use strict';
import React from 'react';

const Skills = (props) => {

  let bulletClassNames = typeof props.bulletClassNames === 'string' ? props.bulletClassNames : '';
  bulletClassNames = `${bulletClassNames} bullet`;

  const skills = ( props.skills ) ? props.skills.map((skill)=> {
    return (<li key={skill} role="presentation">
      <span className={bulletClassNames} aria-hidden="true"></span>{' ' + skill}
    </li>);
  }) : null;

  if( !skills ){
    return <div></div>;
  }

  return (<ul className={props.classNames} aria-label={'Skills used to make ' + props.title}>
    {skills}
  </ul>);
};

Skills.propTypes = {
  bulletClassNames: React.PropTypes.string,
  classNames: React.PropTypes.string,
  skills: React.PropTypes.array,
  title: React.PropTypes.string
};

export default Skills;
