import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './AnimatedLink.module.css';

function AnimatedLink(props) {
  const { as: Component, className, ...rest } = props;
  const classes = classNames(styles.link, className);
  return <Component className={classes} {...rest} />;
}

AnimatedLink.defaultProps = {
  as: Link,
};

AnimatedLink.propTypes = {
  as: PropTypes.elementType,
};

export default AnimatedLink;
