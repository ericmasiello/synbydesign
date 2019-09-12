import React from 'react';
import classNames from 'classnames';
import styles from './Highlighted.scss';

const Highlighted = props => {
  const { className, as: Comp = 'span', ...rest } = props;
  const classes = classNames(styles.highlighted, className);
  return <Comp className={classes} {...rest} />;
};

export default Highlighted;
