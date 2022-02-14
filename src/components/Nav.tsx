import React from 'react';
import classNames from 'classnames';
import type { ElementType } from 'react';
import type { FlexibleComponent } from '../@types/FlexibleComponent';
import * as styles from './Nav.module.css';

export const Nav = <T extends ElementType = 'nav'>(props: FlexibleComponent<T, {}>) => {
  const { component: Component = 'nav', className, ...rest } = props;

  return <Component className={classNames(styles.nav, className)} {...rest} />;
};

export const NavList = <T extends ElementType = 'ul'>(props: FlexibleComponent<T, {}>) => {
  const { component: Component = 'ul', className, ...rest } = props;

  return <Component className={classNames(styles.list, className)} {...rest} />;
};

export const NavItem = <T extends ElementType = 'li'>(props: FlexibleComponent<T, {}>) => {
  const { component: Component = 'li', className, ...rest } = props;

  return <Component className={classNames(styles.item, className)} {...rest} />;
};
