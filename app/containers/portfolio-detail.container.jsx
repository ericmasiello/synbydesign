import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PortfolioDetail from '../components/portfolio-detail.component';
import { loadSelectedPortfolio } from '../actions/portfolio.action-creator';
import transfromPortfolioJSON from '../util/transform-portfolio-json.util';
import callOnMountHOC from '../hoc/call-on-mount.hoc';

const mapStateToProps = ({ portfolio, loadedAllItems }) => ({
  portfolio: transfromPortfolioJSON(portfolio),
  loadedAllItems,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadSelectedPortfolio,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(callOnMountHOC(function () {
  return this.props.loadedAllItems === false;
}, function () {
  this.props.loadSelectedPortfolio(this.props.params.id);
})(PortfolioDetail));
