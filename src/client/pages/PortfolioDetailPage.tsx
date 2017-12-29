import * as React from 'react';
import styled from 'styled-components';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { fetchPortfolioDetail } from '../actions';
import { ThunkActionCreator } from '../../types.d';

interface Props {
  fetchPortfolioDetail: ThunkActionCreator<Portfolio>;
  className?: string;
  // portfolioItems: Portfolio[];
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

  render() {
    console.log('The props', this.props);
    return (
      <div className={this.props.className}>
        This is the detail page {this.props.match.params.id}
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  // return { portfolioItems };
  return {};
}

const loadData = ({ dispatch }: Store<Portfolio>, { id }: { id: string }) =>
  dispatch(fetchPortfolioDetail(id));

export default {
  loadData,
  component: styled(connect(mapStateToProps, { fetchPortfolioDetail })(PortfolioDetailPage))`

  `,
};
