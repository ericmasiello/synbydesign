/* @flow */
import React, { Component } from 'react';
import styles from './portfolioDetail.css';
import type { PortfolioDetailComponentProps } from '../../../types';

export default class PortfolioDetail extends Component {
  componentDidMount() {
    const { portfolioDetail, loadPortfolioDetail } = this.props;
    if (!portfolioDetail) {
      loadPortfolioDetail();
    }
  }
  props: PortfolioDetailComponentProps;
  render() {
    const { params, portfolioDetail } = this.props;
    console.log('portfolioDetail', portfolioDetail);
    return (
      <div className={styles.detail}>
        This is the detail view! {params.id}
      </div>
    );
  }
}
