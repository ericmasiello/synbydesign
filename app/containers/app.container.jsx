import { connect } from 'react-redux';
import App from '../components/app.component';

const mapStateToProps = ({ appLoading }) => ({
  appLoading,
});

export default connect(mapStateToProps)(App);
