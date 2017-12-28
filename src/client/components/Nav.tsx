import * as React from 'react';
import styled from 'styled-components';
import withAnimatedLink from './hocs/animatedLink';

const NavLink = withAnimatedLink();

interface Props {
  className?: string;
}

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`;

NavList.displayName = 'NavList';

const NavListItem = styled.li`
  padding: 1rem;
  text-transform: uppercase;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

NavListItem.displayName = 'NavListItem';

const Nav: React.SFC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <NavList>
        <NavListItem><NavLink href="#selected">Selected Work</NavLink></NavListItem>
        <NavListItem><NavLink href="#resume">Resume</NavLink></NavListItem>
        <NavListItem><NavLink href="#services">Services</NavLink></NavListItem>
        <NavListItem><NavLink href="#about">About</NavLink></NavListItem>
        <NavListItem><NavLink href="#contact">Contact</NavLink></NavListItem>
      </NavList>
    </nav>
  );
};

Nav.displayName = 'Nav';

export default styled(Nav)``;
