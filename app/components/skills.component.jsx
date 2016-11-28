import React, { PropTypes } from 'react';

const Skills = ({ bulletClassNames, skills, classNames, title }) => {
  let bullet = typeof bulletClassNames === 'string' ? bulletClassNames : '';
  bullet = `${bulletClassNames} bullet`;

  const skillsNode = (skills) ? skills.map(skill => (<li key={skill} role="presentation">
    <span className={bullet} aria-hidden="true" />{` ${skill}`}
  </li>)) : null;

  if (!skills) {
    return <div />;
  }

  return (
    <ul className={classNames} aria-label={`Skills used to make ${title}`}>
      {skillsNode}
    </ul>
  );
};

Skills.propTypes = {
  bulletClassNames: PropTypes.string,
  classNames: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default Skills;
