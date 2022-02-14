import React, { useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import AnimatedLink from './AnimatedLink';
import { Nav, NavList, NavItem } from './Nav';
import Logo from './Logo';
import { Text } from './Type';
import X from '../images/synbydesignlogo-x.inline.svg';
import * as styles from './Header.module.css';

function Header(props) {
  const { className, slim, ...rest } = props;

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollDistance = document.body.scrollTop || document.documentElement.scrollTop;
      const amount = scrollDistance / 100;

      if (scrollDistance > 200) {
        document.body.style.setProperty('--spin-play-state', 'running');
      }
      document.body.style.setProperty('--scroll-amount', amount);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const classes = classNames(styles.header, className, {
    [styles.headerSlim]: slim,
  });
  return (
    <header className={classes} {...rest}>
      <Link to="/">
        <Logo as="h1" className={styles.logo}>
          Syn By Design
        </Logo>
      </Link>
      {!slim && (
        <>
          <Text as="p">
            Freelance <span className={styles.role}>developer</span>, <span className={styles.role}>trainer</span>, &{' '}
            <span className={styles.role}>consultant</span>.
          </Text>
          <Nav className={styles.nav}>
            <NavList>
              <NavItem>
                <AnimatedLink as="a" href="#resume">
                  Resume
                </AnimatedLink>
              </NavItem>
              <NavItem>
                <AnimatedLink as="a" href="https://medium.com/@EricMasiello">
                  Medium Blog
                </AnimatedLink>
              </NavItem>
              <NavItem>
                <AnimatedLink as="a" href="https://www.linkedin.com/in/ericmasiello/">
                  LinkedIn Profile
                </AnimatedLink>
              </NavItem>
            </NavList>
          </Nav>
          <span className={styles.xWrapper}>
            <X className={styles.x} />
          </span>
        </>
      )}
    </header>
  );
}

export default Header;
