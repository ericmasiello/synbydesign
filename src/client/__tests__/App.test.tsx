import * as React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter, RouteComponentProps, match } from 'react-router-dom';
import * as H from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appDefault from '../App';
import { renderRoutes, RouteConfig } from 'react-router-config';
jest.mock('react-router-config');

const mockRoute = {
  routes: ['route 1', 'route 2', 'route 3'] as RouteConfig[],
};

const otherProps: RouteComponentProps<any> = {
  location: {
    pathname: '/path/to/thing',
  } as H.Location,
  match: {} as match<any>,
  history: {} as H.History,
};

const { component: App } = appDefault;

const storeMocker = () => {
  const mockReducer = (state: any = {}) => state;
  return createStore(mockReducer);
};

describe('App', () => {
  test('should render', () => {
    const wrapper = mount(
      <Provider store={storeMocker()}>
        <BrowserRouter>
          <App route={mockRoute} {...otherProps} />
        </BrowserRouter>
      </Provider>,
    );

    expect(wrapper).toHaveLength(1);
  });

  test('should call renderRoutes with route list', () => {
    mount(
      <Provider store={storeMocker()}>
        <BrowserRouter>
          <App route={mockRoute} {...otherProps} />
        </BrowserRouter>
      </Provider>,
    );
    expect(renderRoutes).toBeCalledWith(mockRoute.routes);
  });
});
