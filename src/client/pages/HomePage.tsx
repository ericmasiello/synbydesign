import * as React from 'react';
import styled from 'styled-components';
import { Store } from 'redux';
import { connect } from 'react-redux';
import Hero from '../components/Hero';
import PortfolioGallery from '../components/Portfolio/PortfolioGallery';
import Header from '../components/HeaderOnline';
import Resume from '../components/Resume';
import Meta from '../components/Meta';
import Button from '../components/Button';
import { pxToRem } from '../styles/utils';
import likes from '../state/likes';
import resume from '../state/resume';
import portfolio from '../state/portfolio';

const pageRequest: PortfolioRequestParams = {
  pageSize: 8,
  requestedPageNumber: 1,
};

interface Props {
  className?: string;
  portfolioItems: LikedPortfolio[];
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
    if (Object.keys(this.props.resume).length === 0) {
      resume.fetchResume();
    }

    likes.fetchLikes();
  }

  loadInitialPortfolioPage = () => {
    portfolio.fetchPortfolioItems({
      pageSize: pageRequest.pageSize,
      requestedPageNumber: 1,
    });
  };

  loadNextPortfolioPage = () => {
    import('../utils/tracking').then(tracking =>
      tracking.default('Clicked next page'),
    );
    portfolio.fetchPortfolioItems({
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
          addLike={likes.addLike}
        />
        {this.props.existsMorePortfolioItems && (
          <Button onClick={this.loadNextPortfolioPage}>View more</Button>
        )}
        <Resume {...this.props.resume} id="resume" />
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  const portfolioMeta = state.ui.portfolio;
  const existsMorePortfolioItems =
    portfolioMeta.currentPageNumber < portfolioMeta.totalPages;

  return {
    portfolioItems: portfolio.likedPortfolioItemsSelector(state),
    resume: state.resume,
    existsMorePortfolioItems,
    currentPageNumber: portfolioMeta.currentPageNumber,
  };
}

const StyledHomePage = styled(HomePage)`
  ${Button} {
    display: block;
    margin: ${pxToRem(20)} auto 0;
    padding: 1.5rem 4.5rem;
  }

  ${Resume} {
    margin-top: ${pxToRem(20)};
  }
`;

export default {
  loadData: ({ dispatch }: Store<Portfolio[]>) =>
    Promise.all([
      dispatch(resume.fetchResume()),
      dispatch(portfolio.fetchPortfolioItems(pageRequest)),
    ]),
  component: connect(mapStateToProps)(StyledHomePage),
};
