import React from 'react';
import Skills from '../skills.component';

export default (props) => {

  const { portfolioItem } = props;

  return (
    <div className="row mtl">
      <div className="col-sm-6  center-xs">
        <h1 className="start-xs  pll  portfolio__title__detail-text  h2">{portfolioItem.title}</h1>
        <Skills classNames="h4  list-unstyled  text-center"
                bulletClassNames="hide"
                title={portfolioItem.title}
                skills={portfolioItem.skills}/>
      </div>
      <div className="col-sm-6  first-sm portfolio__item--stack  mtl"
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
};