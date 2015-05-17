var React = require('react/addons');
var Router = require('react-router');
var Navigation = require('./navigation');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioStore = require('../stores/portfolioStore');
var jQueryScrollTo = require('jquery.scrollto');
var UIIDs = require('../props/uiIDs');

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

  backToTop: function(e){

    e.preventDefault();

    window.setTimeout(function(){

      jQueryScrollTo('#' + UIIDs.masthead, 500)
    },0);
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
      'maxHeight': this.state.detail.maxHeight,
      'maxWidth': this.state.detail.maxWidth
    };

    var altText = (typeof this.state.detail.altText === 'string' && this.state.detail.altText.length > 0 ) ? this.state.detail.altText : this.state.detail.title;

    return (
      <div>
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
          <div className="text-center mtl">
            <a href="#" onClick={this.backToTop}>Back to top</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PortfolioDetail;