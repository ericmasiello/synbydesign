import React from 'react';
import classNames from 'classnames';
import logo from '../images/synbydesignlogo.svg';
import styles from './Logo.scss';

const Logo = props => {
  const { as: Comp = 'div', className, ...rest } = props;
  return (
    <Comp
      className={classNames(styles.logo, className)}
      {...rest}
      dangerouslySetInnerHTML={{ __html: logo }}
    />
  );
};

export default Logo;
