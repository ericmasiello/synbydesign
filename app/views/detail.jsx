'use strict';

import React from 'react';
import Router from 'react-router';
import Navigation from './components/navigation';
import PortfolioActions from '../actions/portfolioActions';
import PortfolioStore from '../stores/portfolioStore';
import AppConsts from '../consts/app';
import DocumentTitle from 'react-document-title';
import Skills from './components/skills';
import UIStore from '../stores/uiStore';
import ScreenReaderFocusElm from './components/screenReaderFocusElm';
import jQueryScrollTo from 'jquery.scrollto';

export default React.createClass({

  mixins: [Router.Navigation, Router.State],

  getInitialState() {

    return this.getStateFromStore();
  },

  getStateFromStore() {

    return {
      id: this.props.params.id,
      detail: PortfolioStore.getItemById(this.props.params.id),
      type: this.props.params.type
    };
  },

  componentDidMount() {

    const self = this;

    if (PortfolioStore.hasLoadedItemById(self.state.id) === false) {

      PortfolioActions.LOAD_SINGLE(self.state.id);

      self.unsubscribe = PortfolioStore.listen(function () {

        self.setState({
          detail: PortfolioStore.getItemById(self.state.id)
        });
      });

    } else {

      self.setState({
        detail: PortfolioStore.getItemById(self.state.id)
      });
    }

    //Only set focus to primary content if we navigating here from somewhere else (e.g. home page)
    if (UIStore.isInitialLoad() === false) {
      setTimeout(function () {
        document.getElementById(AppConsts.UIID.portfolioDetail).focus();
        jQueryScrollTo(`#${AppConsts.UIID.portfolioDetail}`, 0);
      });
    }
  },

  componentWillUnmount() {

    if (typeof this.unsubscribe === 'function') {

      this.unsubscribe();
    }
  },

  render() {

    const pageTitle = (this.state.detail && this.state.detail.title ) ? this.state.detail.title + ' - ' + AppConsts.TITLE : AppConsts.TITLE;
    const altText = (typeof this.state.detail.altText === 'string' && this.state.detail.altText.length > 0 ) ? this.state.detail.altText : this.state.detail.title;

    return (
      <section className="portfolio-detail">
        <DocumentTitle title={pageTitle}/>
        <Navigation view={'detail'}/>
        <ScreenReaderFocusElm elmId={AppConsts.UIID.portfolioDetail}/>
        <div className="col-xs">
          <h1 className="mtn  text-center"><span className="portfolio__title__text">{this.state.detail.title}</span></h1>
          <div className="portfolio__item  portfolio__item--full mtxl mbxl container-fluid  first-xs"
               aria-label={this.state.detail.title + ' detailed view'}>
            <img className="portfolio__img  portfolio__img--detail" src={this.state.detail.fullSizeImage}
                 alt={altText}/>
          </div>
          <Skills classNames="h4  list-unstyled  text-center"
                  bulletClassNames="hide"
                  title={this.state.detail.title}
                  skills={ this.state.detail.terms && this.state.detail.terms.post_tag ? this.state.detail.terms.post_tag : []}/>
        </div>
      </section>
    );
  }
});