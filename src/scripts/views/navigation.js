var React = require('react/addons');
var Link = require('react-router').Link;
var jQueryScrollTo = require('jquery.scrollto');
var UIIDs = require('../props/uiIDs');

var Navigation = React.createClass({

  scrollTo: function(scrollToID){

    window.setTimeout(function(){

      jQueryScrollTo('#' + scrollToID, 500)
    },0);
  },

  render: function(){

    var logo = '<use xlink:href="#syn-logo" />';
    var title = '<use xlink:href="#syn-title" />';
    var slogan = '<use xlink:href="#syn-slogan" />';

    var logo = (
      <li role="presentation" className="col-xs-12  col-sm  col-md-5  first-xs  default-sm  masthead__logo">
        <h1 className="masthead__logo__title">
          <Link to="home">
            <svg className="logo  logo__head" dangerouslySetInnerHTML={{__html:logo}} />
            <svg className="logo  logo__title" dangerouslySetInnerHTML={{__html:title}} />
            <svg className="logo  logo__slogan" dangerouslySetInnerHTML={{__html:slogan}} />
          </Link>
        </h1>
      </li>
    );

    var nav = (
      <ul className="row  flex-center  middle-xs  masthead__nav">
        <li role="presentation" className="col-xs-12  col-sm">
          <Link to="home" className="pill" onClick={this.scrollTo.bind(this, UIIDs['about'])}>About</Link>
        </li>
        <li role="presentation" className="col-xs-12  col-sm">
          <Link to="home" className="pill" onClick={this.scrollTo.bind(this, UIIDs['portfolioList'])}>Portfolio</Link>
        </li>
        {logo}
        <li role="presentation" className="col-xs-12  col-sm"><a href="https://www.linkedin.com/in/ericmasiello" className="pill">LinkedIn</a></li>
        <li role="presentation" className="col-xs-12  col-sm"><a href="http://www.twitter.com/ericmasiello" className="pill">Twitter</a></li>
      </ul>
    );

    if( this.props.view === 'detail'){

      logo = (
        <li role="presentation" className="col-xs-12  col-sm  col-md-5  first-xs  default-sm  masthead__logo">
          <h1 className="masthead__logo__title">
            <Link to="home">
              <svg className="logo  logo__head  logo--detail" dangerouslySetInnerHTML={{__html:logo}} />
              <svg className="logo  logo__title  logo--detail" dangerouslySetInnerHTML={{__html:title}} />
              <svg className="logo  logo__slogan  logo--detail" dangerouslySetInnerHTML={{__html:slogan}} />
            </Link>
          </h1>
        </li>
      );

      nav = (
        <ul className="row  flex-center  middle-xs  masthead__nav">
          {logo}
        </ul>
      );
    }

    return (
      <header className="header  masthead" id={UIIDs.masthead}>
        <div className="container-fluid">
          <div className="row  masthead__decoration-container  middle-xs">
            <div className="col-xs  masthead__decoration-line"></div>
            <div className="col-xs  masthead__decoration"></div>
            <div className="col-xs  masthead__decoration-line"></div>
          </div>

          <nav>
            {nav}
          </nav>

          <div className="row  masthead__decoration-container  middle-xs">
            <div className="col-xs  masthead__decoration-line"></div>
            <div className="col-xs  masthead__decoration  masthead__decoration--bottom"></div>
            <div className="col-xs  masthead__decoration-line"></div>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Navigation;