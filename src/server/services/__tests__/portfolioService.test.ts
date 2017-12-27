import { list, getById } from '../portfolioService';

describe('list', () => {
  test('it should return default paginated data when no filters are applied', () => {
    return list().then(result => {
      expect(result).toMatchSnapshot();
      expect(result).toHaveLength(20);
    });
  });

  test('it should return pagintated results', () => {
    return Promise.all([
      list({
        pageNumber: 0,
        pageSize: 5,
      }).then(result => {
        expect(result).toMatchSnapshot();
        expect(result).toHaveLength(5);
      }),
      list({
        pageNumber: 1,
        pageSize: 5,
      }).then(result => {
        expect(result).toMatchSnapshot();
        expect(result).toHaveLength(5);
      }),
    ]);
  });

  test('should match a single category', () => {
    return list({
      categories: ['flyers']
    }).then(result => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(item.category.indexOf('flyers')).toBeGreaterThan(-1);
      })
    });
  });

  test('should match at least one of multiple categories', () => {
    return list({
      categories: ['flyers', 'logos']
    }).then(result => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(
          item.category.indexOf('logos') > -1 ||
          item.category.indexOf('flyers') > -1
        ).toBe(true);
      })
    });
  });

  test('should match a single tag', () => {
    return list({
      tags: ['CSS']
    }).then(result => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(item.tags.indexOf('CSS')).toBeGreaterThan(-1);
      })
    });
  });

  test('should match at least one of multiple tags', () => {
    return list({
      tags: ['CSS', 'JavaScript']
    }).then(result => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(
          item.tags.indexOf('CSS') > -1 ||
          item.tags.indexOf('JavaScript') > -1
        ).toBe(true);
      });
    });
  });

  test('should filter by search term on title or description', () => {
    return list({
      searchTerm: 'Foc.us'
    }).then(result => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(
          item.title.search('Foc.us') ||
          (item.description && item.description.search('Foc.us'))
        ).toBeGreaterThan(-1);
      });
    })
  });
});

describe('getById', () => {

});