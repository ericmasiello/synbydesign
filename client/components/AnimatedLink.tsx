import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import * as styles from './AnimatedLink.scss';

type Props = LinkProps;

const AnimatedLink: React.SFC<Props> = props => {
  const { children, ...rest } = props;
  return (
    <Link {...rest}>
      <span className={styles.animatedLink}>{children}</span>
    </Link>
  );
};

AnimatedLink.displayName = 'AnimatedLink';

export default AnimatedLink;
