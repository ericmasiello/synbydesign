import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './AboutMe.module.css';

function AboutMe(props) {
  const { as: Component, content, className, ...rest } = props;
  const classes = classNames(styles.aboutMe, className);
  return (
    <Component className={classes} {...rest}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Component>
  );
}

AboutMe.defaultProps = {
  as: 'div',
  content: '',
};

AboutMe.propTypes = {
  as: PropTypes.elementType,
  content: PropTypes.string,
  className: PropTypes.string,
};

export default AboutMe;
