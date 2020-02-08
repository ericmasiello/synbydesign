import React from "react";
import classNames from 'classnames';
import { Link } from "gatsby"
import AnimatedLink from './AnimatedLink';
import { Nav, NavList, NavItem } from './Nav';
import Logo from './Logo';
import styles from './Header.module.css';

function Header(props) {
  const { className, ...rest } = props;
  const classes = classNames(styles.header, className);
  return (
    <header className={classes} {...rest}>
      <Link to="/">
        <Logo
          as="h1"
          className={styles.logo}
        >
          Syn By Design
        </Logo>
      </Link>
      <Nav>
        <NavList>
          <NavItem><AnimatedLink as="a" href="#gallery">Selected Work</AnimatedLink></NavItem>
          <NavItem><AnimatedLink as="a" href="#resume">Resume</AnimatedLink></NavItem>
        </NavList>
      </Nav>
    </header>
  )
}

export default Header
