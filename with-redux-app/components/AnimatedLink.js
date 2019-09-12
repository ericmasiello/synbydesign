import React from 'react';
import Link, { LinkProps } from 'next/link';
import styles from './AnimatedLink.scss';

const AnimatedLink = props => {
  const { children, ...rest } = props;
  return (
    <Link {...rest}>
      <span className={styles.animatedLink}>{children}</span>
    </Link>
  );
};

AnimatedLink.displayName = 'AnimatedLink';

export default AnimatedLink;
