'use strict';
import expect from 'expect';
import createMockMiddleware, {
  transformMockData
} from './redux-promise-mock-data.middleware';
import mockWebList from '../test-data/portfolio-web.mock';

describe('Redux Promise Mock Daata Middleware', () => {

  const mockData = mockWebList[0];
  let actual;
  let expected;

  afterEach(() => {
    actual = undefined;
    expected = undefined;
  });

  describe('transform mock data based off a URL patern', () => {

    it('should keep data as is if patternObj is undefined', () => {
      actual = transformMockData(mockData);
      expected = mockData;

      expect(actual).toEqual(expected);
    });

    it('should replace props based off pattern of url', () => {
      actual = transformMockData(mockData, '/wp/wp-json/posts/22', {
        ID: /\d+$/
      });
      expected = Object.assign({}, mockData, {
        ID: 22
      });

      expect(actual).toEqual(expected);

      actual = transformMockData(mockData, '/wp/wp-json/posts/78/345', {
        ID: /\d+/,
        content: /\d+$/
      });
      expected = Object.assign({}, mockData, {
        ID: 78,
        content: '345'
      });

      expect(actual).toEqual(expected);

    });
  });

  // describe('create middleware', () => {
  //   //(props) => store => next => action => {
  //
  //
  // });
});
