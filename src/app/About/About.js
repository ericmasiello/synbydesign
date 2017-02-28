/* @flow */
import React, { Component } from 'react';
import type {
  AboutComponentProps,
} from '../../../types';

export default class About extends Component {
  static defaultProps: {
    about: 'Hello!',
  };

  componentDidMount() {
    this.props.loadAbout();
  }

  props: AboutComponentProps;

  render() {
    const { about } = this.props;
    return (
      <div dangerouslySetInnerHTML={{ __html: about }} />
    );
  }
}
