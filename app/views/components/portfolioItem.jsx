'use strict';

import React from 'react';
import { Link } from 'react-router';
import Skills from './skills';

export default React.createClass({

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function(){

    const altAttr = 'Preview image of ' + this.props.item.title;
    const titleAttr = 'View detailed image of ' + this.props.item.title;
    const featuredImage = this.props.item.featured_image ? this.props.item.featured_image.guid : null;

    return (
      <li className="col-sm-6  col-md-4" role="presentation">
        <div className="portfolio__item">
          <span className="h4  portfolio__title">
            <span className="portfolio__title__text">{this.props.item.title}</span>
          </span>
          <Link to={`/detail/${this.props.type}/${this.props.item.ID}`} className="portfolio__thumb" aria-label={titleAttr}>
            <img className="portfolio__thumb__img" src={featuredImage} alt={altAttr} />
          </Link>
        </div>
        <Skills title={this.props.item.title}
                classNames="skills  small"
                skills={this.props.item.terms && this.props.item.terms.post_tag ? this.props.item.terms.post_tag : []} />
      </li>
    );
  }
});