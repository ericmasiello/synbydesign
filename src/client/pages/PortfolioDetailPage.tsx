import * as React from 'react';
import styled from 'styled-components';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Header from '../components/HeaderOnline';
import PortfolioDetailImage from '../components/Portfolio/PortfolioDetailImage';
import PortfolioDetailSVG from '../components/Portfolio/PortfolioDetailSVG';
import PortfolioDetailBackground from '../components/Portfolio/PortfolioDetailBackground';
import PortfolioDetailGallery from '../components/Portfolio/PortfolioDetailGallery';
import PortfolioDetailHero from '../components/Portfolio/PortfolioDetailHero';
import ScrollToTop from '../components/ScrollToTop';
import {
  getGalleryImages,
  getBackgroundImage,
  getHeroImage,
} from '../utils/portfolioImage';
import portfolio from '../state/portfolio';

interface Props {
  className?: string;
  portfolio?: Portfolio;
  match: {
    params: {
      id: string;
    };
  };
}

export class PortfolioDetailPage extends React.Component<Props, {}> {
  componentDidMount() {
    // TODO: only fetch if we don't have the data
    portfolio.fetchPortfolioDetail(this.props.match.params.id);
  }

  getDetailView(portfolio: Portfolio) {
    if (portfolio.svgSource) {
      return <PortfolioDetailSVG svgSource={portfolio.svgSource} />;
    }

    if (this.props.portfolio) {
      const galleryImagesPaths = getGalleryImages(
        this.props.portfolio.imagePaths,
      );
      if (galleryImagesPaths.length > 1) {
        return <PortfolioDetailGallery portfolio={portfolio} />;
      }

      return <PortfolioDetailImage imagePath={galleryImagesPaths[0]} />;
    }
  }

  render() {
    if (!this.props.portfolio) {
      return;
    }
    const heroImage = getHeroImage(this.props.portfolio.imagePaths);
    const bgImage = getBackgroundImage(this.props.portfolio.imagePaths);

    return (
      <ScrollToTop>
        <div className={this.props.className}>
          <Helmet>
            <title>{this.props.portfolio.title}</title>
            <meta property="og:title" content={this.props.portfolio.title} />
          </Helmet>
          {!heroImage && bgImage && (
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
                hideTitle={
                  this.props.portfolio.meta &&
                  !this.props.portfolio.meta.showTitle
                }
              />
            )}
            {this.getDetailView(this.props.portfolio)}
          </div>
        </div>
      </ScrollToTop>
    );
  }
}

export const StyledPortfolioDetailPage = styled(PortfolioDetailPage)`
  position: relative;

  .content {
    position: relative;
    z-index: 2;
  }
`;

function mapStateToProps(state: AppState, props: Props) {
  return {
    portfolio: state.portfolioItems.find(
      item => item.id === props.match.params.id,
    ),
  };
}

const loadData = ({ dispatch }: Store<Portfolio>, { id }: { id: string }) =>
  dispatch(portfolio.fetchPortfolioDetail(id));

const Component = connect(mapStateToProps)(StyledPortfolioDetailPage);

export default {
  loadData,
  component: Component,
};
