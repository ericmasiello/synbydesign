import * as React from 'react';
import styled from 'styled-components';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchPortfolioDetail } from '../actions';
import { ThunkActionCreator } from '../../types.d';
import PortfolioDetailImage from '../components/Portfolio/PortfolioDetailImage';
import Header from '../components/Header';
import { getImagePath, showSVG } from '../utils/portfolioImage';

interface Props {
  fetchPortfolioDetail: ThunkActionCreator<Portfolio>;
  className?: string;
  portfolio: Portfolio;
  match: {
    params: {
      id: string;
    };
  };
}

export class PortfolioDetailPage extends React.Component<Props, {}> {
  componentDidMount() {
    // TODO: only fetch if we don't have the data
    this.props.fetchPortfolioDetail(this.props.match.params.id);
  }

  getDetailView() {
    const preferredImagePath = getImagePath(this.props.portfolio.imagePaths);

    if (preferredImagePath) {
      return (
        <div>
          <Header imagePath={preferredImagePath.url} />
          <PortfolioDetailImage
            imagePath={preferredImagePath.url}
          />
        </div>
      );
    }

    return <div>This is the detail page {this.props.match.params.id}</div>;
  }

  render() {
    return (
      <div className={this.props.className}>
        <Helmet>
          <title>{this.props.portfolio.title}</title>
          <meta property="og:title" content={this.props.portfolio.title} />
        </Helmet>
        {this.getDetailView()}
      </div>
    );
  }
}

function mapStateToProps(state: AppState, props: Props) {
  return {
    portfolio: state.portfolioItems.find(item => item.id === props.match.params.id),
  };
}

const loadData = ({ dispatch }: Store<Portfolio>, { id }: { id: string }) =>
  dispatch(fetchPortfolioDetail(id));

export default {
  loadData,
  component: styled(connect(mapStateToProps, { fetchPortfolioDetail })(PortfolioDetailPage))`

  `,
};
