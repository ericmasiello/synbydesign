import { list, getById } from '../portfolioService';

describe('list', () => {
  test('it should return default paginated data when no filters are applied', () => {
    return list().then((result) => {
      expect(result).toMatchSnapshot();
      expect(result).toHaveLength(20);
    });
  });

  test('it should return pagintated results', () => {
    return Promise.all([
      list({
        pageNumber: 0,
        pageSize: 5,
      }).then((result) => {
        expect(result).toMatchSnapshot();
        expect(result).toHaveLength(5);
      }),
      list({
        pageNumber: 1,
        pageSize: 5,
      }).then((result) => {
        expect(result).toMatchSnapshot();
        expect(result).toHaveLength(5);
      }),
    ]);
  });

  test('should not allow page index to exceed page number', () => {
    return list({
      pageNumber: 50,
      pageSize: 10,
    }).then((result) => {
      expect(result).toMatchSnapshot();
      expect(result.length).toBeLessThanOrEqual(10);
    });
  });

  test('should match a single category', () => {
    return list({
      categories: ['flyers'],
    }).then((result) => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(item.category.indexOf('flyers')).toBeGreaterThan(-1);
      });
    });
  });

  test('should match at least one of multiple categories', () => {
    return list({
      categories: ['flyers', 'logos'],
    }).then((result) => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(
          item.category.indexOf('logos') > -1 ||
          item.category.indexOf('flyers') > -1,
        ).toBe(true);
      });
    });
  });

  test('should match a single tag', () => {
    return list({
      tags: ['CSS'],
    }).then((result) => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(item.tags.indexOf('CSS')).toBeGreaterThan(-1);
      });
    });
  });

  test('should match at least one of multiple tags', () => {
    return list({
      tags: ['CSS', 'JavaScript'],
    }).then((result) => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(
          item.tags.indexOf('CSS') > -1 ||
          item.tags.indexOf('JavaScript') > -1,
        ).toBe(true);
      });
    });
  });

  test('should filter by search term on title or description', () => {
    return list({
      searchTerm: 'Foc.us',
    }).then((result) => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((item) => {
        expect(
          item.title.search('Foc.us') ||
          (item.description && item.description.search('Foc.us')),
        ).toBeGreaterThan(-1);
      });
    });
  });

  test('should return an empty list if no matching results are found', () => {
    return list({
      searchTerm: 'This does not exist!',
    }).then((result) => {
      expect(result).toEqual([]);
    });
  });
});

describe('getById', () => {
  test('should return a portfolio item if a match is found', () => {
    return getById('r-m-r-software-solutions-logo')
      .then((result) => {
        expect((result as Portfolio).id).toBe('r-m-r-software-solutions-logo');
      });
  });
  test('should return undefined if a match is not found', () => {
    return getById('dlkjdlkjd')
      .then((result) => {
        expect(result).toBe(undefined);
      });
  });
});
