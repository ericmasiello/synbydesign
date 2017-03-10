/* @flow */
import { connect } from 'react-redux';
import About from './About';
import { loadAbout } from './actions';

function mapStateToProps({ about }) {
  return {
    about,
  };
}

export default connect(mapStateToProps, { loadAbout })(About);
