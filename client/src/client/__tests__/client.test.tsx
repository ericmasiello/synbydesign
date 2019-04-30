import * as ReactDOM from 'react-dom';
jest.mock('react-dom');
jest.mock('serviceworker-webpack-plugin/lib/runtime', () => null);

let root: Element;

beforeEach(() => {
  root = document.createElement('div');
  root.id = 'root';
  document.querySelector('body')!.appendChild(root);
});

afterEach(() => {
  document.querySelector('body')!.removeChild(root);
});

test('should call hydrate', () => {
  require('../client');
  expect(ReactDOM.hydrate).toBeCalled();
});
