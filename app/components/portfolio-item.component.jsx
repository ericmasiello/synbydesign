'use strict';
import React from 'react';
import { Link } from 'react-router';
import Skills from './skills.component';

const PortfolioItem = (props) => {
  const { title, featuredImagePath, ID, skills } = props.item;
  const altAttr = `Preview image of ${title}`;
  const titleAttr = `View detailed image of ${title}`;

  return (
    <li className="col-sm-6  col-md-4" role="presentation">
      <Link to={`/detail/${ID}`} aria-label={titleAttr} className="portfolio__item">
        <span className="h4  portfolio__title">
          <span className="portfolio__title__text">{title}</span>
        </span>
        <img className={`portfolio__img  ${(featuredImagePath.search(/(\.svg)$/)) > -1 ? 'portfolio__img--svg' : ''}`}
             src={featuredImagePath} alt={altAttr}/>
      </Link>
      <Skills title={title}
              classNames="skills  small"
              skills={skills}/>
    </li>
  );
};

PortfolioItem.propTypes = {
  item: React.PropTypes.shape({
    ID: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    featuredImagePath: React.PropTypes.string.isRequired,
    skills: React.PropTypes.array.isRequired
  }).isRequired
};

export default PortfolioItem;
