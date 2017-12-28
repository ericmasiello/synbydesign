import * as React from 'react';
import styled from 'styled-components';

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
`;

NavListItem.displayName = 'NavListItem';

const Nav: React.SFC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <NavList>
        <NavListItem><a href="#selected">Selected Work</a></NavListItem>
        <NavListItem><a href="#resume">Resume</a></NavListItem>
        <NavListItem><a href="#services">Services</a></NavListItem>
        <NavListItem><a href="#about">About</a></NavListItem>
        <NavListItem><a href="#contact">Contact</a></NavListItem>
      </NavList>
    </nav>
  );
};

Nav.displayName = 'Nav';

export default styled(Nav)``;
