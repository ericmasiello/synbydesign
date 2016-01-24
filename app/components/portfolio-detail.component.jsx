import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Skills from './skills.component';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import { TITLE, UI_IDS } from '../configuration/';
import PortfolioDetailLiveWeb from './portfolio-detail-live-web.component';
import { MIN_LIVE_SITE_BROWSER_WIDTH_MQ } from '../configuration';
require('./portfolio-image-stack.scss');
require('./portfolio.scss');

export default class PortfolioDetail extends Component {

  constructor(props){
    super(props);

    this.getPortfolioItemById = this.getPortfolioItemById.bind(this);
  }

  componentWillMount(){

    if(this.props.loadedAllItems === false){
      this.props.loadSelectedPortfolio(this.props.params.id);
    }
  }

  getPortfolioItemById(id){

    if( !this.props.portfolio || this.props.portfolio.length === 0 ) {
      return null;
    }

    return this.props.portfolio.filter(portfolio => portfolio.ID === parseInt(id))[0];
  }

  render(){

    const portfolioItem = this.getPortfolioItemById(this.props.params.id);
    let pageTitle = `Loading... - ${TITLE}`;
    let pageContents = null;

    if( portfolioItem ){

      pageTitle = portfolioItem.title + ' - ' + TITLE;

      pageContents = (
        <div className="col-xs">
          <h1 className="mtn  text-center"><span className="portfolio__title__text">{portfolioItem.title}</span></h1>
          <div className="portfolio__item  portfolio__item--full  mtxl  mbxl container-fluid first-xs"
               aria-label={`${portfolioItem.title} detailed view`}>
            <img className="portfolio__img  portfolio__img--detail" src={portfolioItem.fullSizeImage.path}
                 alt={portfolioItem.fullSizeImage.altText}/>
          </div>
          <Skills classNames="h4  list-unstyled  text-center"
                  bulletClassNames="hide"
                  title={portfolioItem.title}
                  skills={portfolioItem.skills}/>
        </div>
      );

      if(portfolioItem.meta.stackDesign){

        pageContents = (
          <div className="row">
            <div className="col-sm-6  center-xs">
              <h1 className="start-xs  pll  portfolio__title__text  portfolio__title__text--full">{portfolioItem.title}</h1>
              <Skills classNames="h4  list-unstyled  text-center"
                      bulletClassNames="hide"
                      title={portfolioItem.title}
                      skills={portfolioItem.skills}/>
            </div>
            <div className="col-sm-6  first-sm portfolio__item--stack"
                 aria-label={`${portfolioItem.title} detailed view`}>
              <img className="portfolio__img  portfolio__img--detail  portfolio__img--top" src={portfolioItem.fullSizeImage.path}
                   alt={portfolioItem.fullSizeImage.altText}/>
              <img className="portfolio__img  portfolio__img--detail  portfolio__img--middle" src={portfolioItem.fullSizeImage.path}
                   role="presentation"/>
              <img className="portfolio__img  portfolio__img--detail  portfolio__img--bottom" src={portfolioItem.fullSizeImage.path}
                   role="presentation"/>
            </div>
          </div>
        );
      }

      if(portfolioItem.meta.showLiveSite){
        pageContents = (
          <PortfolioDetailLiveWeb portfolioItem={portfolioItem} liveSiteMinWidthMQ={MIN_LIVE_SITE_BROWSER_WIDTH_MQ} />
        );
      }
    }

    return (
      <section className="portfolio-detail">
        <DocumentTitle title={pageTitle}/>
        <ScreenReaderFocusElm elmId={UI_IDS.portfolioDetail}/>
        {pageContents}
      </section>
    );
  }
}