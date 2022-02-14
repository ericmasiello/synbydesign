import React from 'react';
import classNames from 'classnames';
import type { ElementType } from 'react';
import type { FlexibleComponent } from '../@types/FlexibleComponent';
import * as styles from './PlainList.module.css';

type Props = {};

export const PlainList = <T extends ElementType = 'ul'>(props: FlexibleComponent<T, Props>) => {
  const { component: Component = 'ul', className, ...rest } = props;

  return <Component className={classNames(styles.list, className)} {...rest} />;
};
