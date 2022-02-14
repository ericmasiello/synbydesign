import React from 'react';
import type { ReactNode, FC } from 'react';
import { Text, Muted } from '../Type';

type Props = {
  children: ReactNode;
  className?: string;
  parenthesesClassName?: string;
};

export const Timeline: FC<Props> = (props) => {
  const { children, className, parenthesesClassName } = props;
  return (
    <Text small component={Muted} className={className}>
      <span className={parenthesesClassName}>(</span>
      {children}
      <span className={parenthesesClassName}>)</span>
    </Text>
  );
};
