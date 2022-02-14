import React from 'react';
import classNames from 'classnames';
import { VisuallyHidden } from './VisuallyHidden';
import SynByDesignLogo from '../images/synbydesignlogo.inline.svg';
import type { ElementType, ReactNode } from 'react';
import type { FlexibleComponent } from '../@types/FlexibleComponent';
import * as styles from './Logo.module.css';

type Props = {
  children: ReactNode;
};

export const Logo = <T extends ElementType = 'div'>(props: FlexibleComponent<T, Props>) => {
  const { component: Component = 'div', className, children, ...rest } = props;

  return (
    <Component className={classNames(styles.logo, className)} {...rest}>
      <VisuallyHidden>{children}</VisuallyHidden>
      <SynByDesignLogo />
    </Component>
  );
};
