import React, { Component } from 'react';
import Skills from './skills.component';


export default class PortfolioDetailLiveWeb extends Component {

  constructor(props){
    super(props);
    this.state = {
      mode: 'desktop',
      enableLiveSite: false
    };

    this.changeMode = this.changeMode.bind(this);
    this.handleMediaChange = this.handleMediaChange.bind(this);
    this.mql = window.matchMedia(`(min-width: ${this.props.liveSiteMinWidthMQ}px)`);
  }

  handleMediaChange(mediaQueryList) {
    this.setState({enableLiveSite: mediaQueryList.matches});
  }

  componentDidMount(){
    this.mql.addListener(this.handleMediaChange);
    this.handleMediaChange(this.mql);
  }

  componentWillUnmount(){

    this.mql.removeListener(this.handleMediaChange);
  }

  changeMode(setMode){

    const mode = setMode;
    return (e) => {
      e.preventDefault();
      this.setState({mode});
    };
  }

  getCSSClassNameByMode(prefix, mode){

    switch(mode){
    case 'tablet':
    case 'phone':
      return `${prefix}--${mode}`;
    }

    return '';
  }

  render(){

    const { portfolioItem } = this.props;

    const devices = [{
      label: 'Phone',
      icon: '<use xlink:href="#phone" />',
      changeFn: this.changeMode('phone')
    },{
      label: 'Tablet',
      icon: '<use xlink:href="#tablet" />',
      changeFn: this.changeMode('tablet')
    },{
      label: 'Desktop',
      icon: '<use xlink:href="#desktop" />',
      changeFn: this.changeMode('desktop')
    }];

    return (
      <div className="col-xs">
        <h1 className="mtn  text-center"><span className="portfolio__title__detail-text">{portfolioItem.title}</span></h1>
        <div className={`portfolio__item  portfolio__item--full  mtxl  mbxl container-fluid first-xs portfolio__live-site ${this.getCSSClassNameByMode('portfolio__live-site', this.state.mode)}`}
             aria-label={`${portfolioItem.title} detailed view`}>
          {this.state.enableLiveSite ? (
            <iframe src={portfolioItem.meta.liveSiteUrl}
                    className={`portfolio__live-site__content ${this.getCSSClassNameByMode('portfolio__live-site__content', this.state.mode)}`}>
            </iframe>
          ) : (
            <img className="portfolio__img  portfolio__img--detail" src={portfolioItem.fullSizeImage.path}
                 alt={portfolioItem.fullSizeImage.altText}/>
          )}
        </div>
        {this.state.enableLiveSite ? (
          <div className="text-center  portfolio__live__devices mbxl">
            {devices.map((device)=>{
              return (
                <a key={device.label} className="portfolio__live__device"
                   href="#"
                   onClick={device.changeFn}>{device.label}
                  <svg className={`portfolio__live__device__icon
                                    portfolio__live__device__icon--${device.label.toLowerCase()}
                                    ${this.state.mode === device.label.toLowerCase() ? 'portfolio__live__device__icon--selected' : ''}`}
                       dangerouslySetInnerHTML={{__html: device.icon}}/>
                </a>
              );
            })}
          </div>
        ) : ( null )}
        <Skills classNames="h4  list-unstyled  text-center"
                bulletClassNames="hide"
                title={portfolioItem.title}
                skills={portfolioItem.skills}/>
      </div>
    );
  }
}