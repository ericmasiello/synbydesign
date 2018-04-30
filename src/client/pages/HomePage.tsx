import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash-es/isEmpty';
import { fetchPortfolioItems, fetchResume } from '../actions';
import Hero from '../components/Hero';
import PortfolioGallery from '../components/Portfolio/PortfolioGallery';
import Header from '../components/HeaderOnline';
import Resume from '../components/Resume';
import Meta from '../components/Meta';
import { ThunkActionCreator } from '../../types.d';

const pageRequest: PortfolioRequestParams = {
  pageSize: 10,
  requestedPageNumber: 1,
};

interface Props {
  fetchPortfolioItems: ThunkActionCreator<Portfolio[]>;
  fetchResume: ThunkActionCreator<Resume>;
  className?: string;
  portfolioItems: Portfolio[];
  resume: Resume;
  existsMorePortfolioItems: boolean;
  currentPageNumber: number;
}

export class HomePage extends React.Component<Props, {}> {
  componentDidMount() {
    // TODO: only fetch if we don't have the data
    if (this.props.portfolioItems.length <= 1) {
      this.loadInitialPortfolioPage();
    }
    if (isEmpty(this.props.resume)) {
      this.props.fetchResume();
    }
  }

  loadInitialPortfolioPage = () => {
    this.props.fetchPortfolioItems({
      pageSize: pageRequest.pageSize,
      requestedPageNumber: 1,
    });
  };

  loadNextPortfolioPage = () => {
    this.props.fetchPortfolioItems({
      pageSize: pageRequest.pageSize,
      requestedPageNumber: this.props.currentPageNumber + 1,
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <Meta />
        <Header />
        <Hero />
        <PortfolioGallery
          id="gallery"
          items={this.props.portfolioItems}
          displayMore={this.props.existsMorePortfolioItems}
          onClickLoadMore={this.loadNextPortfolioPage}
        />
        <Resume {...this.props.resume} id="resume" />
      </div>
    );
  }
}

function mapStateToProps({ portfolioItems, resume, ui }: AppState) {
  const portfolioMeta = ui.portfolio;
  const existsMorePortfolioItems =
    portfolioMeta.currentPageNumber < portfolioMeta.totalPages;
  return {
    portfolioItems,
    resume,
    existsMorePortfolioItems,
    currentPageNumber: portfolioMeta.currentPageNumber,
  };
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
