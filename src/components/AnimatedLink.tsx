import React from 'react';
import classNames from 'classnames';
import type { ElementType } from 'react';
import type { FlexibleComponent } from '../@types/FlexibleComponent';
import * as styles from './AnimatedLink.module.css';

type Props = {};

export const AnimatedLink = <T extends ElementType = 'a'>(props: FlexibleComponent<T, Props>) => {
  const { component: Component = 'a', className, ...rest } = props;

  return <Component className={classNames(styles.link, className)} {...rest} />;
};
