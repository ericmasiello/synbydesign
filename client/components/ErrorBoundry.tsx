import * as React from 'react';
import * as Sentry from '@sentry/browser';

interface Props {
  render: (options: {
    error: Error;
    errorInfo: string;
    resetError: () => void;
  }) => React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export default class ErrorBoundry extends React.Component<Props, State> {
  state = {
    hasError: false,
    error: undefined,
    errorInfo: undefined,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
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
        error: this.state.error!,
        errorInfo: this.state.errorInfo!,
        resetError: this.resetError,
      });
    }
    return this.props.children;
  }
}
