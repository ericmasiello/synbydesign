import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Skills from './skills.component';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import { TITLE, UI_IDS } from '../configuration/';

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
          <div className="portfolio__item  portfolio__item--full mtxl mbxl container-fluid  first-xs"
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