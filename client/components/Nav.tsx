import * as React from 'react';
import classNames from 'classnames';
import AnimatedLink from './AnimatedLink';
import * as styles from './Nav.scss';

type Props = FlexibleComponentProps;

const Nav: React.SFC<Props> = props => {
  const { as: Comp = 'nav', className, ...rest } = props;
  const classes = classNames(styles.nav, className);
  return (
    <Comp className={classes} {...rest}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <AnimatedLink>
            <a href="#selected-work">Selected Work</a>
          </AnimatedLink>
        </li>
        <li className={styles.navItem}>
          <AnimatedLink>
            <a href="#gallery">Gallery</a>
          </AnimatedLink>
        </li>
      </ul>
    </Comp>
  );
};

export default Nav;
