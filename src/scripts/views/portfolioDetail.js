var React = require('react/addons');
var Router = require('react-router');
var Navigation = require('./navigation');
var PortfolioActions = require('../actions/portfolioActions');
var PortfolioStore = require('../stores/portfolioStore');

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

    var tags = (this.state.detail.terms) ? (this.state.detail.terms.post_tag.map(function( tag ){

      return (<li key={Math.random()}>{tag.name}</li>);
    })) : [];

    return (
      <div>
        <Navigation view={'detail'} />
        <div className="portfolio__item mtxl container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 mbxl">
              <img className="portfolio__full" src={this.state.detail.fullSizeImage} alt={this.state.detail.title} />
            </div>
            <div className="col-xs-12 col-sm-4 phl">
              <h1 className="mtn"><span className="portfolio__title__text">{this.state.detail.title}</span></h1>
              <ul className="h4">
                {tags}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PortfolioDetail;