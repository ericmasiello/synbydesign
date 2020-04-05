import React, { useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import AnimatedLink from './AnimatedLink';
import { Nav, NavList, NavItem } from './Nav';
import Logo from './Logo';
import { Text } from './Type';
import X from '../images/synbydesignlogo-x.inline.svg';
import styles from './Header.module.css';

function Header(props) {
  const { className, ...rest } = props;

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollDistance = document.body.scrollTop || document.documentElement.scrollTop;
      const amount = scrollDistance / 100;

      if (scrollDistance > 200) {
        document.body.style.setProperty('--spin-play-state', 'running');
      } else {
        document.body.style.removeProperty('--spin-play-state');
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

  const classes = classNames(styles.header, className);
  return (
    <header className={classes} {...rest}>
      <Link to="/">
        <Logo as="h1" className={styles.logo}>
          Syn By Design
        </Logo>
      </Link>
      <Text as="p">
        Freelance <span className={styles.role}>developer</span>, <span className={styles.role}>trainer</span>, &{' '}
        <span className={styles.role}>consultant</span>.
      </Text>
      <Nav>
        <NavList>
          <NavItem>
            <AnimatedLink as="a" href="#gallery">
              Selected Work
            </AnimatedLink>
          </NavItem>
          <NavItem>
            <AnimatedLink as="a" href="#resume">
              Resume
            </AnimatedLink>
          </NavItem>
          <NavItem>
            <AnimatedLink as="a" href="https://medium.com/@EricMasiello">
              Blog
            </AnimatedLink>
          </NavItem>
        </NavList>
      </Nav>
      <X className={styles.x} />
    </header>
  );
}

export default Header;
