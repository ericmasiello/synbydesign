import * as React from 'react';
import styled from 'styled-components';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { fetchPortfolioDetail } from '../actions';
import { ThunkActionCreator } from '../../types.d';
import PortfolioDetail from '../components/Portfolio/PortfolioDetail';

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

  // TODO: Make the header of the page use the active image as a background image
  render() {
    return (
      <div className={this.props.className}>
        This is the detail page {this.props.match.params.id}
        <PortfolioDetail
          {...this.props.portfolio}
        />
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
