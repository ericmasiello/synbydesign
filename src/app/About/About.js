/* @flow */
import React, { Component } from 'react';
import type {
  Syn$AboutComponentProps,
} from '../../../types';

export default class About extends Component {
  componentDidMount() {
    this.props.loadAbout();
  }

  props: Syn$AboutComponentProps;

  render() {
    const { about }: { about: string } = this.props;

    return (
      <div dangerouslySetInnerHTML={{ __html: about }} />
    );
  }
}
