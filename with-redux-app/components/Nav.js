import React from 'react';
import classNames from 'classnames';
import AnimatedLink from './AnimatedLink';
import styles from './Nav.scss';

const Nav = props => {
  const { as: Comp = 'nav', className, ...rest } = props;
  const classes = classNames(styles.nav, className);
  return (
    <Comp className={classes} {...rest}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <AnimatedLink href="#selected-work">
            <a>Selected Work</a>
          </AnimatedLink>
        </li>
        <li className={styles.navItem}>
          <AnimatedLink href="#gallery">
            <a>Gallery</a>
          </AnimatedLink>
        </li>
      </ul>
    </Comp>
  );
};

export default Nav;
