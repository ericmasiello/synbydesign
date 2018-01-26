import * as React from 'react';
import styled from 'styled-components';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchPortfolioDetail } from '../actions';
import { ThunkActionCreator } from '../../types.d';
import Header from '../components/Header';
import PortfolioDetailImage from '../components/Portfolio/PortfolioDetailImage';
import PortfolioDetailBackground from '../components/Portfolio/PortfolioDetailBackground';
import PortfolioDetailGallery from '../components/Portfolio/PortfolioDetailGallery';
import PortfolioDetailHero from '../components/Portfolio/PortfolioDetailHero';
import { getGalleryImages, getBackgroundImage, getHeroImage } from '../utils/portfolioImage';

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

  getDetailView(portfolio: Portfolio) {
    const galleryImagesPaths = getGalleryImages(this.props.portfolio.imagePaths);
    if (galleryImagesPaths.length > 1) {
      return <PortfolioDetailGallery portfolio={portfolio} />;
    }

    return (
      <PortfolioDetailImage
        imagePath={galleryImagesPaths[0]}
      />
    );
  }

  render() {
    const bgImage = getBackgroundImage(this.props.portfolio.imagePaths);
    const heroImage = getHeroImage(this.props.portfolio.imagePaths);

    return (
      <div className={this.props.className}>
        <Helmet>
          <title>{this.props.portfolio.title}</title>
          <meta property="og:title" content={this.props.portfolio.title} />
        </Helmet>
        {bgImage && (
          <PortfolioDetailBackground
            imagePath={bgImage.originalUrl}
            styles={bgImage.meta && bgImage.meta.backgroundStyles}
          />
        )}
        <div className="content">
          <Header />
          {heroImage && (
            <PortfolioDetailHero
              imagePath={heroImage.originalUrl}
              title={this.props.portfolio.title}
              description={this.props.portfolio.description}
              hideTitle={this.props.portfolio.meta && !this.props.portfolio.meta.showTitle}
            />
          )}
          {this.getDetailView(this.props.portfolio)}
        </div>
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
    position: relative;

    .content {
      position: relative;
      z-index: 2;
    }
  `,
};
