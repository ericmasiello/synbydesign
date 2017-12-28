import * as React from 'react';
import styled from 'styled-components';
import withAnimatedLink from './hocs/animatedLink';

const AnimatedLink = withAnimatedLink();

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
        <NavListItem><AnimatedLink href="#selected">Selected Work</AnimatedLink></NavListItem>
        <NavListItem><AnimatedLink href="#resume">Resume</AnimatedLink></NavListItem>
        <NavListItem><AnimatedLink href="#services">Services</AnimatedLink></NavListItem>
        <NavListItem><AnimatedLink href="#about">About</AnimatedLink></NavListItem>
        <NavListItem><AnimatedLink href="#contact">Contact</AnimatedLink></NavListItem>
      </NavList>
    </nav>
  );
};

Nav.displayName = 'Nav';

export default styled(Nav)``;
