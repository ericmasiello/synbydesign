import React from 'react';
import { Link } from 'react-router';
import Skills from './skills.component';

export default (props) => {
  'use strict';

  const { title, featuredImagePath } = props.item;
  const altAttr = `Preview image of ${title}`;
  const titleAttr = `View detailed image of ${title}`;

  return (
    <li className="col-sm-6  col-md-4" role="presentation">
      <Link to={`/detail/${props.item.ID}`} aria-label={titleAttr} className="portfolio__item">
        <span className="h4  portfolio__title">
          <span className="portfolio__title__text">{props.item.title}</span>
        </span>
        <img className={`portfolio__img  ${(featuredImagePath.search(/(\.svg)$/)) > -1 ? 'portfolio__img--svg' : ''}`}
             src={featuredImagePath} alt={altAttr}/>
      </Link>
      <Skills title={props.item.title}
              classNames="skills  small"
              skills={props.item.skills}/>
    </li>
  );
};