import expect from 'expect';
import filter from './filter-by-property.util';

describe('Filter Portfolio By Property Utility', () => {
  let actual;
  let expected;

  afterEach(() => {
    actual = undefined;
    expected = undefined;
  });

  it('should return a filter function when passing it the first argument', () => {
    actual = filter('isWebsite');
    expected = 'function';

    expect(typeof actual).toEqual(expected);
  });

  it('should filter a list of items based on the property passed', () => {
    const list = [{
      ID: 1,
      isWebsite: true,
    }, {
      ID: 2,
      isWebsite: false,
    }, {
      ID: 3,
      isWebsite: true,
    }];
    actual = list.filter(filter('isWebsite')).map(item => item.ID);
    expected = [1, 3];

    expect(actual).toEqual(expected);
  });
});
