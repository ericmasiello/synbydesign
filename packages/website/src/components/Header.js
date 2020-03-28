import React, { useEffect, useRef, useCallback } from 'react';
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

  const xRef = useRef();

  const handleScroll = useCallback(() => {
    if (!xRef.current) {
      return;
    }
    requestAnimationFrame(() => {
      const scroll = document.body.scrollTop || document.documentElement.scrollTop;
      const amount = `${scroll / 100}%`;
      const invert = `${scroll / 100}%`;
      document.body.style.setProperty('--scroll-amount', amount);
      document.body.style.setProperty('--scroll-invert', invert);
    });
  }, [xRef]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <div ref={xRef} className={styles.x}>
        <X />
      </div>
    </header>
  );
}

export default Header;
