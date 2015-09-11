'use strict';

var React = require('react/addons');
var Link = require('react-router').Link;
var Skills = require('./skills');

var PortfolioItem = React.createClass({

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function(){

    var detailParams = {
      id: this.props.item.ID
    };
    var alt = this.props.item.title + ' thumbnail';
    var featuredImage = this.props.item.featured_image ? this.props.item.featured_image.guid : null;

    return (
      <li className="col-sm-6  col-md-4">
        <div className="portfolio__item">
          <span className="h4  portfolio__title">
            <span className="portfolio__title__text">{this.props.item.title}</span>
          </span>
          <Link to="detail" params={detailParams} className="portfolio__thumb">
            <img className="portfolio__thumb__img" src={featuredImage} alt={alt} />
          </Link>
        </div>
        <Skills title={this.props.item.title}
                classNames="skills  small"
                skills={this.props.item.terms && this.props.item.terms.post_tag ? this.props.item.terms.post_tag : []} />
      </li>
    );
  }
});

module.exports = PortfolioItem;