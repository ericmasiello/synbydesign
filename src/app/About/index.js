/* @flow */
import { connect } from 'react-redux';
import About from './About';
import { loadAbout } from './actions';
import type { Syn$RootState } from '../../../types';

function mapStateToProps({ about }: Syn$RootState) {
  return {
    about,
  };
}

export default connect(mapStateToProps, { loadAbout })(About);
