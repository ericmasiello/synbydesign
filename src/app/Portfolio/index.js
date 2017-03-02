/* @flow */
import { connect } from 'react-redux';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';
import { loadPortfolio, loadPortfolioDetail } from './actions';
import getPortfolioId from '../../util/portfolio';
import type { RootState } from '../../../types';

function mapStateToPropsForList({ portfolio }: RootState) {
  return {
    portfolio,
  };
}

function mapStateToPropsForDetail(state: RootState) {
  // FIXME: this shoudl go into a selector
  return {
    portfolioDetail: state.portfolio ?
      state.portfolio.filter(item => getPortfolioId(item) === state.selectedPortfolioId)[0] :
      {},
  };
}

export const PortfolioListContainer = connect(
  mapStateToPropsForList,
  { loadPortfolio },
)(PortfolioList);

export const PortfolioDetailContainer = connect(
  mapStateToPropsForDetail,
  { loadPortfolioDetail },
)(PortfolioDetail);
