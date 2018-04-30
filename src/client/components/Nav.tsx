import * as React from 'react';
import styled from 'styled-components';
import AnimatedLink from './AnimatedLink';
import { BODY_WEIGHTS } from '../styles/vars';

interface Props {
  className?: string;
}

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

NavList.displayName = 'NavList';

const NavListItem = styled.li`
  padding: 1rem;
  text-transform: uppercase;
  font-weight: ${BODY_WEIGHTS.bold};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

NavListItem.displayName = 'NavListItem';

class Nav extends React.Component<Props> {
  static displayName = 'Nav';

  scrollTo(event: React.MouseEvent<HTMLLinkElement>) {
    event.preventDefault();
    const elm = event.currentTarget;
    const hash: string = (elm as any).hash;

    const targetElm = document.querySelector(hash);
    if (!targetElm) {
      return;
    }
    window.scroll({
      top: targetElm.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const { className } = this.props;
    return (
      <nav className={className}>
        <NavList>
          <NavListItem>
            <AnimatedLink href="#gallery" onClick={this.scrollTo}>
              Selected Work
            </AnimatedLink>
          </NavListItem>
          <NavListItem>
            <AnimatedLink href="#resume" onClick={this.scrollTo}>
              Resume
            </AnimatedLink>
          </NavListItem>
        </NavList>
      </nav>
    );
  }
}

export default styled(Nav)``;
