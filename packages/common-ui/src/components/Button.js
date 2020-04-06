import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

function Button(props) {
  const { as: Component, className, ...rest } = props;
  const classes = classNames(styles.button, className);
  return <Component className={classes} {...rest} />;
}

Button.defaultProps = {
  as: 'button',
};

Button.propTypes = {
  as: PropTypes.elementType,
};

export default Button;
