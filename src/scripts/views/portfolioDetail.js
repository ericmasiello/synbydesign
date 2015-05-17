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

    var tags = (this.state.detail.terms) ? (this.state.detail.terms.post_tag.map(function( tag ){

      return (<li key={Math.random()}>{tag.name}</li>);
    })) : [];

    return (
      <div>
        <Navigation view={'detail'} />
        <div className="portfolio__item mtxl container-fluid">
          <div>
            <div className="mbxl">
              <img className="portfolio__full" src={this.state.detail.fullSizeImage} alt={this.state.detail.title} />
            </div>
            <div className="text-center">
              <h1 className="mtn"><span className="portfolio__title__text">{this.state.detail.title}</span></h1>
              <ul className="h4  list-unstyled">
                {tags}
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