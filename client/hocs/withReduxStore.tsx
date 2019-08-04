import React from 'react';
import { Store, AnyAction } from 'redux';
import { initializeStore, IAppState } from '../store';

const isServer = typeof window === 'undefined';

interface AppWindow extends Window {
  __NEXT_REDUX_STORE__?: any;
}

const getOrCreateStore = (
  initialState: IAppState | undefined,
): Store<IAppState, AnyAction> => {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  const win = window as AppWindow;

  // Create store if unavailable on the client and set it on the window object
  if (!win['__NEXT_REDUX_STORE__']) {
    const state = initializeStore(initialState);
    win['__NEXT_REDUX_STORE__'] = state;
  }
  return win['__NEXT_REDUX_STORE__'];
};

type THoC = (App: React.ElementType) => React.ElementType;

const withReduxStore: THoC = App => {
  return class AppWithRedux extends React.Component {
    private reduxStore: Store<IAppState, AnyAction>;
    // FIXME:
    static async getInitialProps(appContext: any) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(undefined);

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      // @ts-ignore
      if (typeof App.getInitialProps === 'function') {
        // @ts-ignore
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props: any[]) {
      super(props);
      // @ts-ignore
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export default withReduxStore;
