import renderer from '../renderer';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import createStore from '../../../utils/createStore';

jest.mock('react-helmet', () => {
  const obj: any = { Helmet: {} };
  obj.Helmet.renderStatic = jest.fn(() => ({
    title: { toString: jest.fn(() => '<title>The title</title>') },
    meta: {
      toString: jest.fn(() => '<meta name="meta" description="the meta">'),
    },
  }));
  return obj;
});

jest.mock('../../../client/Routes', () => []);
jest.mock('styled-components');
jest.mock('react-dom/server');

(ServerStyleSheet as any).mockImplementation(() => {
  const sheet: any = {};
  sheet.getStyleTags = jest.fn(
    () => '<link rel="stylesheet" href="/link/to/styles.css" />',
  );
  sheet.collectStyles = jest.fn();
  return sheet;
});

(renderToString as jest.Mock<{}>).mockImplementation(jest.fn(() => '<html />'));

test('should render head as a string', () => {
  const url = '/';
  const axiosInstance = axios.create();
  const store = createStore(axiosInstance);
  const { head } = renderer(url, store, {});

  expect(head.trim()).toEqual(
    [
      '<title>The title</title>',
      '<meta name="meta" description="the meta">',
      '<link rel="stylesheet" href="/link/to/styles.css" />',
    ].join('\n'),
  );
});

test('should render html as a string', () => {
  const url = '/';
  const axiosInstance = axios.create();
  const store = createStore(axiosInstance);
  const { html } = renderer(url, store, {});

  expect(html).toEqual('<html />');
});

test('should render state as a string', () => {
  const url = '/';
  const axiosInstance = axios.create();
  const store = createStore(axiosInstance);
  const { state } = renderer(url, store, {});

  expect(state).toEqual(JSON.stringify(store.getState()));
});
