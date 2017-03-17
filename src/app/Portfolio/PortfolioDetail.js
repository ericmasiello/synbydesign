/* @flow */
import React, { Component } from 'react';
import styles from './portfolioDetail.css';
import type { Syn$PortfolioDetailComponentProps } from '../../../types';

export default class PortfolioDetail extends Component {
  componentDidMount() {
    const {
      portfolioDetail,
      loadPortfolioDetail,
      params,
    } = this.props;

    const id: string = params.id;

    if (!portfolioDetail) {
      loadPortfolioDetail(id);
    }
  }
  props: Syn$PortfolioDetailComponentProps;
  render() {
    const { params, portfolioDetail } = this.props;
    console.log('Inside PortfolioDetail Component', 'portfolioDetail', portfolioDetail);
    return (
      <div className={styles.detail}>
        This is the detail view! {params.id}
      </div>
    );
  }
}
