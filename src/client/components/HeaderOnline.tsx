import * as React from 'react';
import { Link } from 'react-router-dom';
import * as H from 'history';
import { withRouter, match } from 'react-router';
import Header from './Header';
import Logo from './Logo';
import Nav from './Nav';

interface Props {
  match: match<any>;
  location: H.Location;
  history: H.History;
}

export const HeaderOnline: React.SFC<Props> = props => {
  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
      {props.location.pathname === '/' ? <Nav /> : null}
    </Header>
  );
};

Header.displayName = 'HeaderOnline';

export default withRouter(HeaderOnline);
