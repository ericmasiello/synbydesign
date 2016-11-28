import React from 'react';
import Skills from '../skills.component';
import portfolioItemPropTypes from './portfolio-item.propTypes';

const PortfolioDetailSVGComponent = ({ portfolioItem }) => (
  <div className="row mtl">
    <div className="col-sm-4  center-xs">
      <h1 className="start-xs  pll  portfolio__title__detail-text">{portfolioItem.title}</h1>
      <Skills
        classNames="h4  list-unstyled  text-center"
        bulletClassNames="hide"
        title={portfolioItem.title}
        skills={portfolioItem.skills}
      />
    </div>
    <section className="col-sm-8  first-sm  portfolio__item  portfolio__item--full  portfolio__item--3-up">
      <div dangerouslySetInnerHTML={{ __html: portfolioItem.meta.svg }} className="portfolio__img-3-up  portfolio__img-3-up--primary" aria-label={`SVG image depicting ${portfolioItem.title}`} role="img" />
      <div dangerouslySetInnerHTML={{ __html: portfolioItem.meta.svg }} className="portfolio__img-3-up  portfolio__img-3-up--secondary" role="presentation" />
      <div dangerouslySetInnerHTML={{ __html: portfolioItem.meta.svg }} className="portfolio__img-3-up  portfolio__img-3-up--tertiary" role="presentation" />
    </section>
  </div>
);

PortfolioDetailSVGComponent.propTypes = {
  ...portfolioItemPropTypes,
};

export default PortfolioDetailSVGComponent;
