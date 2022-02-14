import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './ResumeSkills.module.css';

function ResumeSkills(props) {
  const { as: Component, skills, className, ...rest } = props;
  const classes = classNames(styles.skills, className);
  return (
    <Component className={classes} {...rest}>
      {skills.map((skill, i) => (
        <li key={skill}>
          {i > 0 && <span aria-hidden className={styles.bullet} />}
          {skill}
        </li>
      ))}
    </Component>
  );
}

ResumeSkills.defaultProps = {
  as: 'ul',
  skills: [],
};

ResumeSkills.propTypes = {
  as: PropTypes.oneOf(['ul', 'ol']),
  skills: PropTypes.arrayOf(PropTypes.string),
};

export default ResumeSkills;
