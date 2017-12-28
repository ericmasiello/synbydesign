import * as React from 'react';
import styled from 'styled-components';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { fetchPortfolioItems } from '../actions';
import Hero from '../components/Hero';
import PortfolioGallery from '../components/PortfolioGallery';
import { ThunkActionCreator } from '../../types.d';

interface Props {
  fetchPortfolioItems: ThunkActionCreator<Portfolio[]>;
  className?: string;
  portfolioItems: Portfolio[];
}

export class HomePage extends React.Component<Props, {}> {
  componentDidMount() {
    // TODO: only fetch if we don't have the data
    this.props.fetchPortfolioItems();
  }

  render() {
    return (
      <div className={this.props.className}>
        <Hero />
        <PortfolioGallery
          items={this.props.portfolioItems}
        />
      </div>
    );
  }
}

function mapStateToProps({ portfolioItems }: AppState) {
  return { portfolioItems };
}

export default {
  loadData: ({ dispatch }: Store<Portfolio[]>) => dispatch(fetchPortfolioItems()),
  component: styled(connect(mapStateToProps, { fetchPortfolioItems })(HomePage))`

  `,
};
