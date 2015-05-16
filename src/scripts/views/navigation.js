var React = require('react/addons');

var Navigation = React.createClass({

  render: function(){

    var logo = '<use xlink:href="#syn-logo" />';
    var title = '<use xlink:href="#syn-title" />';
    var slogan = '<use xlink:href="#syn-slogan" />';

    return (
      <header className="header  masthead">
        <div className="container-fluid">

          <div className="row  masthead__decoration-container  middle-xs">
            <div className="col-xs  masthead__decoration-line"></div>
            <div className="col-xs  masthead__decoration"></div>
            <div className="col-xs  masthead__decoration-line"></div>
          </div>

          <nav>
            <ul className="row  flex-center  middle-xs">
              <li role="presentation" className="col-xs-12  col-sm"><a href="#about" className="pill">About</a></li>
              <li role="presentation" className="col-xs-12  col-sm"><a href="#portfolio" className="pill">Portfolio</a></li>
              <li role="presentation" className="col-xs-12  col-sm  col-md-5  first-xs  default-sm  masthead__logo">
                <h1 className="masthead__logo__title">
                  <svg className="logo  logo__head" dangerouslySetInnerHTML={{__html:logo}} />
                  <svg className="logo  logo__title" dangerouslySetInnerHTML={{__html:title}} />
                  <svg className="logo  logo__slogan" dangerouslySetInnerHTML={{__html:slogan}} />
                </h1>
              </li>
              <li role="presentation" className="col-xs-12  col-sm"><a href="#hireme" className="pill">Hire Me</a></li>
              <li role="presentation" className="col-xs-12  col-sm"><a href="http://www.twitter.com/ericmasiello" className="pill">Follow Me</a></li>
            </ul>
          </nav>

          <div className="row  masthead__decoration-container  middle-xs">
            <div className="col-xs  masthead__decoration-line"></div>
            <div className="col-xs  masthead__decoration  masthead__decoration--bottom"></div>
            <div className="col-xs  masthead__decoration-line"></div>
          </div>

        </div>
      </header>
    )
  }
});

module.exports = Navigation;