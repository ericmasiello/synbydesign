import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Logo from './Logo';
import Nav from './Nav';
import styles from './Header.scss';

const HeaderOnline = props => {
  const { as: Comp = 'header', className, ...rest } = props;
  const classes = classNames(styles.header, className);
  return (
    <Comp className={classes} {...rest}>
      <div className={styles.inner}>
        <Link href="/">
          <Logo as="h1" aria-label="Syn By Design: Eric Masiello's Portfolio" />
        </Link>
        <Nav className={styles.nav} />
      </div>
    </Comp>
  );
};

HeaderOnline.displayName = 'HeaderOnline';

export default HeaderOnline;
