import React from 'react';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundry extends React.Component {
  state = {
    hasError: false,
    error: undefined,
    errorInfo: undefined,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });

    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        // @ts-ignore
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return this.props.render({
        error: this.state.error,
        errorInfo: this.state.errorInfo,
        resetError: this.resetError,
      });
    }
    return this.props.children;
  }
}
