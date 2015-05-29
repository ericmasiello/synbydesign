'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Navigation = require('./components/navigation');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioStore = require('../stores/portfolioStore');
var AppConsts = require('../consts/app');
var DocumentTitle = require('react-document-title');

var PortfolioDetail = React.createClass({

  mixins: [ Router.Navigation, Router.State ],

  getInitialState: function(){

    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    var id = this.getParams().id;

    return {
      id: id,
      detail: PortfolioStore.getItemById(id),
      type: this.getParams().type
    };
  },

  componentDidMount: function(){

    var self = this;

    if( PortfolioStore.hasLoadedItemById(self.state.id) === false ){

      PortfolioActions.LOAD_SINGLE(self.state.id);

      self.unsubscribe = PortfolioStore.listen(function(){

        self.setState({
          detail: PortfolioStore.getItemById(self.state.id)
        });
      });

    } else {

      self.setState({
        detail: PortfolioStore.getItemById(self.state.id)
      });
    }
  },

  componentWillUnmount: function(){

    if( typeof this.unsubscribe === 'function'){

      this.unsubscribe();
    }
  },

  render: function(){

    var skills;

    if( this.state.detail.terms && this.state.detail.terms.post_tag ){

      skills = this.state.detail.terms.post_tag.map(function( tag ){

        return (<li key={Math.random()}>{tag.name}</li>);
      });
    }

    var imageStyles = {
      maxHeight: this.state.detail.maxHeight,
      maxWidth: this.state.detail.maxWidth
    };

    var pageTitle = (this.state.detail && this.state.detail.title ) ? this.state.detail.title + ' - ' + AppConsts.TITLE : AppConsts.TITLE;

    var altText = (typeof this.state.detail.altText === 'string' && this.state.detail.altText.length > 0 ) ? this.state.detail.altText : this.state.detail.title;

    return (
      <div>
        <DocumentTitle title={pageTitle} />
        <Navigation view={'detail'} />
        <div className="portfolio__item mtxl container-fluid">
          <div>
            <div className="mbxl  text-center">
              <img className="portfolio__full" src={this.state.detail.fullSizeImage} alt={altText} style={imageStyles} />
            </div>
            <div className="text-center">
              <h1 className="mtn"><span className="portfolio__title__text">{this.state.detail.title}</span></h1>
              <ul className="h4  list-unstyled">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PortfolioDetail;