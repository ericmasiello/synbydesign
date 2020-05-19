import React from 'react';
import classNames from 'classnames';
import { VisuallyHidden } from '@synbydesign/common-ui';
import SynByDesignLogo from '../images/synbydesignlogo.inline.svg';
import styles from './Logo.module.css';

function Logo(props) {
  const { className, as: Component, children, ...rest } = props;
  const classes = classNames(styles.logo, className);
  return (
    <Component className={classes} {...rest}>
      <VisuallyHidden>{children}</VisuallyHidden>
      <SynByDesignLogo />
    </Component>
  );
}

Logo.defaultProps = {
  as: 'div',
};

export default Logo;
