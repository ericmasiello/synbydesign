var React = require('react/addons');

var PortfolioItem = React.createClass({

  render: function(){

    var tags = this.props.item.terms.post_tag.map(function(tag ){

      return (<li>{tag.name}</li>);
    });

    var href = '#/detail/' + this.props.item.ID;
    var alt = this.props.item.title + ' thumbnail';
    var featuredImage = this.props.item.featured_image ? this.props.item.featured_image.guid : null;

    return (
      <li ng-repeat="post in portfolio.webPosts" className="col-sm-6  col-md-4">
        <div className="portfolio__item">
          <h2 className="h4  portfolio__title">
            <span className="portfolio__title__text">{this.props.item.title}</span>
          </h2>
          <a href={href}>
            <img className="portfolio__thumb" src={featuredImage}
                 alt={alt} /></a>
        </div>
        <ul className="skills  small">
          {tags}
        </ul>
      </li>
    );
  }
});

module.exports = PortfolioItem;