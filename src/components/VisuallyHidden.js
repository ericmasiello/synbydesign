import React from 'react';
import classNames from 'classnames';
import * as styles from './VisuallyHidden.module.css';

function VisuallyHidden(props) {
  const { className, as: Component = 'span', ...rest } = props;
  const classes = classNames(styles.hidden, className);
  return <Component className={classes} {...rest} />;
}

export default VisuallyHidden;
