/* @flow */
import { connect } from 'react-redux';
import App from './App';

function mapStateToProps({ portfolio }) {
  return {
    portfolio,
  };
}

export default connect(mapStateToProps, [])(App);
