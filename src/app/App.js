/* @flow */
import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import type { Syn$AppProps } from '../../types';

// function mapStateToProps({ portfolio }) {
//   return {
//     portfolio,
//   };
// }

export default function App({
  children,
}: Syn$AppProps) {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/">Home</Link> | <Link to="/detail/r-m-r-software-solutions-logo">Detail</Link>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

// export default connect(mapStateToProps)(App);
