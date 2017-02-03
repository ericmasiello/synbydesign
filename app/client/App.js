/* @flow */
import React, { PropTypes } from 'react';
import type { AppProps } from '../../types';

export default function App({ portfolio }: AppProps) {
  return (
    <div>
      Hello!
      {portfolio.map(item => <li key={`item-${item}`}>{item}</li>)}
    </div>
  );
}

App.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.string).isRequired,
};

App.defaultProps = {
  portfolio: ['These', 'are', 'defaults'],
};
