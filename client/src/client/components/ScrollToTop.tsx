import * as React from 'react';
import { withRouter, match } from 'react-router';
import * as H from 'history';

interface Props {
  match: match<any>;
  location: H.Location;
  history: H.History;
}

class ScrollToTop extends React.Component<Props> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
