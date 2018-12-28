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
import { PortfolioThunkActionCreator, ThunkActionCreator } from '../../types';

const pageRequest: PortfolioRequestParams = {
  pageSize: 8,
  requestedPageNumber: 1,
};

interface Props {
  fetchPortfolioItems: PortfolioThunkActionCreator<Portfolio[]>;
  fetchResume: ThunkActionCreator<any>;
  fetchLikes: ThunkActionCreator<any>;
  addLike: ThunkActionCreator<any>;
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
      this.props.fetchResume();
    }

    this.props.fetchLikes();
  }

  loadInitialPortfolioPage = () => {
    this.props.fetchPortfolioItems({
      pageSize: pageRequest.pageSize,
      requestedPageNumber: 1,
    });
  };

  loadNextPortfolioPage = () => {
    import('../utils/tracking').then(tracking =>
      tracking.default('Clicked next page'),
    );
    this.props.fetchPortfolioItems({
      pageSize: pageRequest.pageSize,
      requestedPageNumber: this.props.currentPageNumber + 1,
    });
  };

  render() {
    const {
      className,
      portfolioItems,
      addLike,
      existsMorePortfolioItems,
      resume,
    } = this.props;

    return (
      <div className={className}>
        <Meta />
        <Header />
        <Hero />
        <PortfolioGallery
          id="gallery"
          items={portfolioItems}
          addLike={addLike}
        />
        {existsMorePortfolioItems && (
          <Button onClick={this.loadNextPortfolioPage}>View more</Button>
        )}
        <Resume {...resume} id="resume" />
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

const WrappedComponent = connect(
  mapStateToProps,
  {
    fetchPortfolioItems: portfolio.fetchPortfolioItems,
    fetchResume: resume.fetchResume,
    fetchLikes: likes.fetchLikes,
    addLike: likes.addLike,
  },
  // @ts-ignore
)(StyledHomePage);

export default {
  loadData: ({ dispatch }: Store<Portfolio[]>) =>
    Promise.all([
      dispatch(resume.fetchResume()),
      dispatch(portfolio.fetchPortfolioItems(pageRequest)),
    ]),
  component: WrappedComponent,
};
