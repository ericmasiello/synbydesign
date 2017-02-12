/* @flow */
import React, { PropTypes } from 'react';
import type {
  AboutComponentProps,
} from '../../../types';

export default function About({ loadAbout }: AboutComponentProps) {
  loadAbout();
  return (
    <div>Learn about me!</div>
  );
}

About.propTypes = {
  loadAbout: PropTypes.func.isRequired,
};
