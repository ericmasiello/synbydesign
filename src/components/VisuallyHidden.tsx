import React from 'react';
import classNames from 'classnames';
import type { ElementType } from 'react';
import type { FlexibleComponent } from '../@types/FlexibleComponent';
import * as styles from './VisuallyHidden.module.css';

type Props = {};

export const VisuallyHidden = <T extends ElementType = 'div'>(props: FlexibleComponent<T, Props>) => {
  const { component: Component = 'div', className, ...rest } = props;

  return <Component className={classNames(styles.hidden, className)} {...rest} />;
};
