import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AboutContent from '../components/about-content.component';
import { loadAboutContent } from '../actions/about-content.action-creator';
import callOnMountHOC from '../hoc/call-on-mount.hoc';

const mapStateToProps = ({ aboutContent, loadedAboutContent }) => ({
  aboutContent,
  loadedAboutContent,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadAboutContent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  callOnMountHOC(
    function () {
      return this.props.loadedAboutContent === false;
    },
    function () {
      this.props.loadAboutContent();
    },
  )(AboutContent));
