import React, { Component } from 'react';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import PortfolioItem from './portfolio-item.component';
import { UI_IDS, DESIGN_CATEGORIES, OTHER_CATEGORIES, WEB_CATEGORIES } from '../configuration/';
import filterPortfolioByType from '../util/filter-by-category-slug.util';

export default class PortfolioList extends Component {
  constructor(props) {
    super(props);

    this.createPortfolioItem = this.createPortfolioItem.bind(this);
  }

  componentWillMount(){
    this.props.loadAllPortfolio(['web','other', 'logos', 'illustration', 'flyers', 'business-cards']);
  }

  createPortfolioItem(item) {
    return (<PortfolioItem item={item} key={item.ID} />);
  }

  render() {

    const { portfolio } = this.props;
    const webItems = portfolio.filter(filterPortfolioByType(WEB_CATEGORIES)).map(this.createPortfolioItem);
    const designItems = portfolio.filter(filterPortfolioByType(DESIGN_CATEGORIES)).map(this.createPortfolioItem);
    const otherItems = portfolio.filter(filterPortfolioByType(OTHER_CATEGORIES)).map(this.createPortfolioItem);

    let webContent = null;
    let designContent = null;
    let otherContent = null;

    if (webItems.length > 0) {
      webContent = (
        <div>
          <h1 className="h3  text-center">Web Design &amp; Development</h1>
          <ul className="portfolio  row  center-xs  start-sm">
            {webItems}
          </ul>
        </div>
      );
    }

    if (designItems.length > 0) {
      designContent = (
        <div>
          <h1 className="h3  text-center">Illustration, Logos, &amp; Flyers</h1>
          <ul className="portfolio  row  center-xs  start-sm">
            {designItems}
          </ul>
        </div>
      );
    }

    if (otherItems.length > 0) {
      otherContent = (
        <div>
          <h1 className="h3  text-center">Other Rad Stuff</h1>
          <ul className="portfolio  row  center-xs  start-sm">
            {otherItems}
          </ul>
        </div>
      );
    }

    return (
      <section>
        <ScreenReaderFocusElm elmId={UI_IDS.portfolioList}/>
        {webContent}
        {designContent}
        {otherContent}
      </section>
    );
  }
}