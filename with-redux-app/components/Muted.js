import React from 'react';
import classNames from 'classnames';
import styles from './Muted.scss';

const Muted = props => {
  const { className, as: Comp = 'span', ...rest } = props;
  const classes = classNames(styles.muted, className);
  return <Comp className={classes} {...rest} />;
};

export default Muted;
