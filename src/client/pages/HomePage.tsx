import * as React from 'react';
import styled from 'styled-components';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchPortfolioItems } from '../actions';
import Hero from '../components/Hero';
import PortfolioGallery from '../components/PortfolioGallery';
import Header from '../components/Header';
import { ThunkActionCreator } from '../../types.d';

const pageRequest = {
  pageSize: 100,
};

interface Props {
  fetchPortfolioItems: ThunkActionCreator<Portfolio[]>;
  className?: string;
  portfolioItems: Portfolio[];
}

export class HomePage extends React.Component<Props, {}> {
  componentDidMount() {
    // TODO: only fetch if we don't have the data
    if (this.props.portfolioItems.length <= 1) {
      this.props.fetchPortfolioItems(pageRequest);
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <Helmet>
          <title>Syn By Design: Eric Masiello's Portfolio</title>
          <meta property="og:title" content="Syn By Design: Eric Masiello's Portfolio" />
        </Helmet>
        <Header />
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
  loadData: ({ dispatch }: Store<Portfolio[]>) => dispatch(fetchPortfolioItems(pageRequest)),
  component: styled(connect(mapStateToProps, { fetchPortfolioItems })(HomePage))`

  `,
};
