import React from 'react';
import { Text, Muted } from '../Type';

function Timeline(props) {
  const { children, className, parenthesesClassName } = props;
  return (
    <Text small as={Muted} className={className}>
      <span className={parenthesesClassName}>(</span>
      {children}
      <span className={parenthesesClassName}>)</span>
    </Text>
  );
}

export default Timeline;
