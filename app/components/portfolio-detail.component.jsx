/* global document, window */
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import PortfolioDetailDefault from './portfolio-detail/portfolio-detail-default.component';
import PortfolioDetailLiveWeb from './portfolio-detail/portfolio-detail-live-web.component';
import PortfolioDetailStackDesign from './portfolio-detail/portfolio-detail-stack-design.component';
import PortfolioDetailSVG from './portfolio-detail/portfolio-detail-svg.component';
import Navigation from './navigation.component';
import { TITLE, UI_IDS, MIN_LIVE_SITE_BROWSER_WIDTH_MQ } from '../configuration';
import portfolioItemPropTypes from './portfolio-detail/portfolio-item.propTypes';

export default class PortfolioDetail extends Component {

  constructor(props) {
    super(props);

    this.getPortfolioItemById = this.getPortfolioItemById.bind(this);
  }

  componentDidMount() {
    document.getElementById(UI_IDS.portfolioDetail).focus();
    window.scrollTo(0, 0);
  }

  getPortfolioItemById(id) {
    if (!this.props.portfolio || this.props.portfolio.length === 0) {
      return null;
    }

    return this.props.portfolio.filter(portfolio => portfolio.ID === parseInt(id, 10))[0];
  }

  render() {
    const portfolioItem = this.getPortfolioItemById(this.props.params.id);
    let pageTitle = `Loading... ${TITLE}`;
    let pageContents = null;

    if (portfolioItem) {
      pageTitle = `${portfolioItem.title} - ${TITLE}`;

      if (portfolioItem.meta.stackDesign) {
        pageContents = (<PortfolioDetailStackDesign portfolioItem={portfolioItem} />);
      } else if (portfolioItem.meta.showLiveSite) {
        pageContents = (
          <PortfolioDetailLiveWeb
            portfolioItem={portfolioItem}
            liveSiteMinWidthMQ={MIN_LIVE_SITE_BROWSER_WIDTH_MQ}
          />
      );
      } else if (portfolioItem.meta.svg) {
        pageContents = (<PortfolioDetailSVG portfolioItem={portfolioItem} />);
      } else {
        pageContents = (<PortfolioDetailDefault portfolioItem={portfolioItem} />);
      }
    }

    return (
      <section className="portfolio-detail">
        <DocumentTitle title={pageTitle} />
        <Navigation view={'detail'} />
        <ScreenReaderFocusElm elmId={UI_IDS.portfolioDetail} className="no-focus-ring">
          {pageContents}
        </ScreenReaderFocusElm>
      </section>
    );
  }
}

PortfolioDetail.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
  }).isRequired,
  ...portfolioItemPropTypes,
};

PortfolioDetail.defaultProps = {
  portfolio: [],
};
