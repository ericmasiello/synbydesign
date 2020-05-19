import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Nav.module.css';

export function Nav(props) {
  const { className, as: Component, ...rest } = props;
  const classes = classNames(styles.nav, className);
  return <Component className={classes} {...rest} />;
}

Nav.propTypes = {
  as: PropTypes.elementType,
};

Nav.defaultProps = {
  as: 'nav',
};

export function NavList(props) {
  const { className, as: Component, ...rest } = props;
  const classes = classNames(styles.list, className);
  return <Component className={classes} {...rest} />;
}

NavList.propTypes = {
  as: PropTypes.elementType,
};

NavList.defaultProps = {
  as: 'ul',
};

export function NavItem(props) {
  const { className, as: Component, ...rest } = props;
  const classes = classNames(styles.item, className);
  return <Component className={classes} {...rest} />;
}

NavItem.propTypes = {
  as: PropTypes.elementType,
};

NavItem.defaultProps = {
  as: 'li',
};
