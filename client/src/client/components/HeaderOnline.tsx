import * as React from 'react';
import { Link } from 'react-router-dom';
import * as H from 'history';
import { withRouter, match } from 'react-router';
import Header from './Header';
import Logo from './Logo';
import Nav from './Nav';
import Sticky from './Sticky';

interface Props {
  match: match<any>;
  location: H.Location;
  history: H.History;
}

export class HeaderOnline extends React.Component<Props> {
  header: HTMLElement | null;

  constructor(props: Props) {
    super(props);
    this.header = null;
  }

  setRef = (elm: HTMLElement) => {
    this.header = elm;
  };

  render() {
    return (
      <Sticky>
        {stick => (
          <Header stick={stick} setRef={this.setRef}>
            <Link to="/">
              <Logo
                tag="h1"
                aria-label="Syn By Design: Eric Masiello's Portfolio"
              />
            </Link>
            {this.props.location.pathname === '/' ? (
              <Nav offsetElement={this.header} />
            ) : null}
          </Header>
        )}
      </Sticky>
    );
  }
}

Header.displayName = 'HeaderOnline';

export default withRouter(HeaderOnline);
