var Reflux = require('reflux');
var PortfolioActions = require('../actions/portfolioActions');
var UIActions = require('../actions/uiActions');
var jQuery = require('jquery');
var PortfolioModels = require('../collections/portfolioModels');

var _webPortfolio = new PortfolioModels([]);

//var _webPortfolio = [];

var PortfolioStore = Reflux.createStore({
  init: function () {
    this.listenTo(PortfolioActions.loadWeb, 'onLoadWeb');
    this.listenTo(PortfolioActions.loadWeb.completed, 'onLoadedWeb');
  },

  onLoadedWeb: function(items){

    //Here we store the data into our backbone model/collection
    debugger;
    _webPortfolio.add(items);
    this.trigger(_webPortfolio.toJSON());
  },

  onLoadWeb: function () {

    //Assume `request` is some HTTP library (e.g.superagent)
    //This should really be some Backbone sync operation at
    //this point to load the data

    UIActions.load();
    jQuery.getJSON('./wp/wp-json/posts/?filter[category_name]=web', function(data){

      PortfolioActions.loadWeb.completed(data);
      UIActions.completedLoading();
    });

    //setTimeout(function(){
    //
    //  PortfolioActions.load.completed({
    //    title: 'Post title',
    //    ID: 1234,
    //    featured_image: {
    //      guid: '/path/to/featured/image.png'
    //    },
    //    terms: {
    //      post_tag: ['Tag 1', 'Tag 2', 'Tag 3']
    //    }
    //  });
    //  UIActions.completedLoading();
    //
    //}, 1000);



    //request(url, function (response) {
    //  if (response.ok) {
    //    PortfolioActions.load.completed(response.body);
    //  } else {
    //    PortfolioActions.load.failed(response.error);
    //  }
    //})
  }
});

module.exports = PortfolioStore;