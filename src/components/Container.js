import React from 'react';
import classNames from 'classnames';
import styles from './Container.module.css';

function Container(props) {
  const { component: Component = 'div', className, ...rest } = props;

  const classes = classNames(styles.container, className);

  return <Component className={classes} {...rest} />;
}

export default Container;
