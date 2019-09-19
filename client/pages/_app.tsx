import App, { Container } from 'next/app';
import React from 'react';
import withReduxStore from '../hocs/withReduxStore.js';
import { Provider } from 'react-redux';

class MyApp extends App {
  render() {
    // @ts-ignore
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);