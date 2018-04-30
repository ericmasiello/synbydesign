import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Logo from './Logo';
import Nav from './Nav';

export const HeaderOnline: React.SFC<{}> = () => {
  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </Header>
  );
};

Header.displayName = 'HeaderOnline';

export default HeaderOnline;
