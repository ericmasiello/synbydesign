import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import isEmpty from 'lodash-es/isEmpty';
import { fetchPortfolioItems, fetchResume } from '../actions';
import Hero from '../components/Hero';
import PortfolioGallery from '../components/Portfolio/PortfolioGallery';
import Header from '../components/Header';
import { ThunkActionCreator } from '../../types.d';

const pageRequest: FetchPortfolioItemsParams = {
  pageSize: 100,
};

interface Props {
  fetchPortfolioItems: ThunkActionCreator<Portfolio[]>;
  fetchResume: ThunkActionCreator<Resume>;
  className?: string;
  portfolioItems: Portfolio[];
  resume: Resume;
}

export class HomePage extends React.Component<Props, {}> {
  componentDidMount() {
    // TODO: only fetch if we don't have the data
    if (this.props.portfolioItems.length <= 1) {
      this.props.fetchPortfolioItems(pageRequest);
    }
    if (isEmpty(this.props.resume)) {
      this.props.fetchResume();
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <Helmet>
          <title>Syn By Design: Eric Masiello's Portfolio</title>
          <meta
            property="og:title"
            content="Syn By Design: Eric Masiello's Portfolio"
          />
        </Helmet>
        <Header />
        <Hero />
        <PortfolioGallery items={this.props.portfolioItems} />
      </div>
    );
  }
}

function mapStateToProps({ portfolioItems, resume }: AppState) {
  return { portfolioItems, resume };
}

export default {
  loadData: ({ dispatch }: Store<Portfolio[]>) =>
    Promise.all([
      dispatch(fetchResume()),
      dispatch(fetchPortfolioItems(pageRequest)),
    ]),
  component: connect(mapStateToProps, { fetchPortfolioItems, fetchResume })(
    HomePage,
  ),
};
