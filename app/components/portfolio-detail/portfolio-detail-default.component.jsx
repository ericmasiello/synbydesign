import React from 'react';
import portfolioItemPropTypes from './portfolio-item.propTypes';
import Skills from '../skills.component';

const PortfolioDetail = ({ portfolioItem }) => (
  <div className="col-xs">
    <h1 className="mtn  text-center portfolio__title__detail-text">{portfolioItem.title}</h1>
    <div className="portfolio__item  portfolio__item--full  mtxl  mbxl container-fluid first-xs">
      <img
        className="portfolio__img  portfolio__img--detail" src={portfolioItem.fullSizeImage.path}
        alt={portfolioItem.fullSizeImage.altText}
      />
    </div>
    <Skills
      classNames="h4  list-unstyled  text-center"
      bulletClassNames="hide"
      title={portfolioItem.title}
      skills={portfolioItem.skills}
    />
  </div>
);

PortfolioDetail.propTypes = {
  ...portfolioItemPropTypes,
};

export default PortfolioDetail;
