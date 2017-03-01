/* @flow */
import { connect } from 'react-redux';
import PortfolioList from './PortfolioList';
import { loadPortfolio } from './actions';

function mapStateToProps({ portfolio }) {
  return {
    portfolio,
  };
}

export default connect(mapStateToProps, { loadPortfolio })(PortfolioList);
