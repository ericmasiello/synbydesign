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

export default React.createClass({

  mixins: [Router.Navigation, Router.State],

  getInitialState: function () {

    return this.getStateFromStore();
  },

  getStateFromStore: function () {

    return {
      id: this.props.params.id,
      detail: PortfolioStore.getItemById(this.props.params.id),
      type: this.props.params.type
    };
  },

  componentDidMount: function () {

    var self = this;

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
      });
    }
  },

  componentWillUnmount: function () {

    if (typeof this.unsubscribe === 'function') {

      this.unsubscribe();
    }
  },

  render: function () {

    var imageStyles = {
      maxHeight: this.state.detail.maxHeight,
      maxWidth: this.state.detail.maxWidth
    };

    var pageTitle = (this.state.detail && this.state.detail.title ) ? this.state.detail.title + ' - ' + AppConsts.TITLE : AppConsts.TITLE;
    var altText = (typeof this.state.detail.altText === 'string' && this.state.detail.altText.length > 0 ) ? this.state.detail.altText : this.state.detail.title;

    return (
      <div>
        <DocumentTitle title={pageTitle}/>
        <Navigation view={'detail'}/>
        <ScreenReaderFocusElm elmId={AppConsts.UIID.portfolioDetail}/>
        <section className="portfolio__item mtxl container-fluid"
                 aria-label={this.state.detail.title + ' detailed view'}>
          <div>
            <div className="mbxl  text-center">
              <img className="portfolio__full" src={this.state.detail.fullSizeImage} alt={altText} style={imageStyles}/>
            </div>
            <div className="text-center">
              <h1 className="mtn"><span className="portfolio__title__text">{this.state.detail.title}</span></h1>
              <Skills classNames="h4  list-unstyled"
                      bulletClassNames="hide"
                      title={this.state.detail.title}
                      skills={ this.state.detail.terms && this.state.detail.terms.post_tag ? this.state.detail.terms.post_tag : []}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
});