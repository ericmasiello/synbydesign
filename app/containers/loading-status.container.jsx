import { connect } from 'react-redux';
import LoadingStatus from '../components/loading-status.component';

const mapStateToProps = ({ appLoading }) => ({
  appLoading,
});

export default connect(mapStateToProps)(LoadingStatus);
