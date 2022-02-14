import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './PlainList.module.css';

function PlainList(props) {
  const { as: Component, className, ...rest } = props;
  const classes = classNames(styles.list, className);
  return <Component className={classes} {...rest} />;
}

PlainList.defaultProps = {
  as: 'ul',
};

PlainList.propTypes = {
  as: PropTypes.elementType,
};

export default PlainList;
