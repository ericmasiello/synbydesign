import React from 'react';
import classNames from 'classnames';
import type { ElementType, ReactNode } from 'react';
import type { FlexibleComponent } from '../@types/FlexibleComponent';
import * as styles from './Type.module.css';

type HProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
  upper?: boolean;
};

export const H = <T extends ElementType = 'span'>(props: FlexibleComponent<T, HProps>) => {
  const { component: Component = 'span', level, upper, bold, className, ...rest } = props;
  const classes = classNames(
    styles.h,
    {
      [styles[`h${level}`]]: !!level,
      [styles.hUpper]: !!upper,
      [styles.hBold]: !!bold,
    },
    className
  );
  return <Component className={classes} {...rest} />;
};

type TextProps = {
  children: ReactNode;
  small?: boolean;
};

export const Text = <T extends ElementType = 'span'>(props: FlexibleComponent<T, TextProps>) => {
  const { component: Component = 'span', small, className, ...rest } = props;
  const classes = classNames(
    styles.text,
    {
      [styles.textSmall]: !!small,
    },
    className
  );
  return <Component className={classes} {...rest} />;
};

type HighlightProps = {
  children: ReactNode;
};

export const Highlight = <T extends ElementType = 'span'>(props: FlexibleComponent<T, HighlightProps>) => {
  const { component: Component = 'span', className, ...rest } = props;
  const classes = classNames(styles.highlight, className);
  return <Component className={classes} {...rest} />;
};

type MutedProps = {
  children: ReactNode;
};

export const Muted = <T extends ElementType = 'span'>(props: FlexibleComponent<T, MutedProps>) => {
  const { component: Component = 'span', className, ...rest } = props;
  const classes = classNames(styles.muted, className);
  return <Component className={classes} {...rest} />;
};
