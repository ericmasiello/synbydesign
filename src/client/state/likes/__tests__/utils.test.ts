import * as utils from '../utils';
import * as browser from '../../../utils/browser';
jest.mock('../../../utils/browser');

describe('getLikes', () => {
  describe('non-browser environment', () => {
    beforeEach(() => {
      (browser.isBrowser as jest.Mock<{}>).mockImplementation(() => false);
    });

    test('should return an empty set', () => {
      const result = utils.getLikes();
      expect(result.size).toBe(0);
    });
  });

  describe('browser environment', () => {
    beforeEach(() => {
      (browser.isBrowser as jest.Mock<{}>).mockImplementation(() => true);
    });

    describe('with data', () => {
      beforeEach(() => {
        // @ts-ignore
        window.localStorage = {
          getItem: jest
            .fn()
            .mockImplementation(() => JSON.stringify(['foo', 'bar'])),
        };
      });
      xtest('should return values in local storage as a set', () => {
        const result = utils.getLikes();

        expect(result.size).toBe(2);
        expect(result.has('foo')).toBe(true);
        expect(result.has('bar')).toBe(true);
      });
    });
  });

  describe('without data', () => {
    beforeEach(() => {
      // @ts-ignore
      window.localStorage = {
        getItem: jest.fn().mockImplementation(() => null),
      };
    });
    test('should return values in local storage as a set', () => {
      const result = utils.getLikes();

      expect(result.size).toBe(0);
    });
  });
});

describe('addLike', () => {
  describe('non-browser environment', () => {
    beforeEach(() => {
      (browser.isBrowser as jest.Mock<{}>).mockImplementation(() => false);
    });

    xtest('should return the passed in value', () => {
      const result = utils.addLike('foo');

      expect(result).toBe('foo');
    });
  });

  describe('browser environment', () => {
    beforeEach(() => {
      (browser.isBrowser as jest.Mock<{}>).mockImplementation(() => true);
      // @ts-ignore
      window.localStorage = {
        getItem: jest
          .fn()
          .mockImplementation(() => JSON.stringify(['foo', 'bar'])),
        setItem: jest.fn(),
      };
    });

    xtest('should return undefined when value already exists in set', () => {
      const result = utils.addLike('foo');

      expect(result).toBeUndefined();
    });

    test('should return value when it does not exist in set', () => {
      const result = utils.addLike('baz');

      expect(result).toBe('baz');
    });
  });
});
