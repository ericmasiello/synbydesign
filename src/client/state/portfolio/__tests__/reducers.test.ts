import * as reducers from '../reducers';
import * as types from '../types';
import { AnyAction } from 'redux';

describe('portfolioMetaReducer', () => {
  test('should return a default object when initializing', () => {
    // @ts-ignore
    const result = reducers.portfolioMetaReducer(undefined, {});

    expect(result).toEqual({
      currentPageNumber: 0,
      filterCategories: '',
      filterSearchTerm: '',
      filterTags: '',
      pageSize: 0,
      totalPages: 0,
    });
  });

  test('should return a parsed object if action is FETCH_PORTFOLIO_ITEMS and there is no error', () => {
    const action: AnyAction = {
      type: types.FETCH_PORTFOLIO_ITEMS,
      meta: {
        _currentpagenumber: 1,
        _pagesize: 2,
        _totalpages: 4,
        _filtercategories: 'foo',
        _filtertags: 'tag1, tag2',
        _filtersearchterm: 'search term',
      },
    };
    const result = reducers.portfolioMetaReducer(
      reducers.defaultPortfolioMeta,
      action,
    );

    expect(result).toEqual({
      currentPageNumber: 1,
      filterCategories: 'foo',
      filterSearchTerm: 'search term',
      filterTags: 'tag1, tag2',
      pageSize: 2,
      totalPages: 4,
    });
  });

  test('should return initial state if there is an error', () => {
    const result = reducers.portfolioMetaReducer(
      reducers.defaultPortfolioMeta,
      {
        type: types.FETCH_PORTFOLIO_DETAIL,
        error: true,
      },
    );

    expect(result).toEqual(reducers.defaultPortfolioMeta);
  });
});

describe('portfolioReducer', () => {
  test('should return a default object when initializing', () => {
    // @ts-ignore
    const result = reducers.portfolioReducer(undefined, {});

    expect(result).toEqual([]);
  });

  describe('FETCH_PORTFOLIO_ITEMS', () => {
    describe('with error', () => {
      test('should return initial state', () => {
        const result = reducers.portfolioReducer([], {
          type: types.FETCH_PORTFOLIO_DETAIL,
          error: true,
          payload: ['foo', 'bar'],
        });

        expect(result).toEqual([]);
      });
    });

    describe('no errors', () => {
      test('should add new items but ignore duplicates', () => {
        const initialState: Portfolio[] = [
          {
            id: 'sigma',
            title: 'Sigma Performance Group',
            description: 'sigmaperfgroup',
            meta: {
              stackDesign: false,
              websiteUrl: '',
              isSVG: false,
              thumb: {
                column: 'span 1',
                row: 'span 2',
                position: '0 100%',
              },
            },
            category: ['web'],
            tags: ['(X)HTML', 'CSS', 'Design/Branding', 'PHP'],
            imagePaths: [
              {
                originalUrl: `sigmaperfgroup-original.jpg`,
                largeUrl: `sigmaperfgroup-700px.jpg`,
                mediumUrl: `sigmaperfgroup-450px.jpg`,
                thumbUrl: `sigmaperfgroup-200px.jpg`,
                title: '',
                description: '',
                priority: 0,
              },
            ],
          },
          {
            id: 'incognito',
            title: 'Incognito Logo',
            description:
              'Logo for Incognito electronic events and production service',
            meta: {
              stackDesign: false,
              websiteUrl: '',
              isSVG: false,
              thumb: {
                position: '0 100%',
              },
            },
            category: ['logos'],
            tags: [],
            imagePaths: [
              {
                originalUrl: `incognito-original.jpg`,
                largeUrl: `incognito-700px.jpg`,
                mediumUrl: `incognito-450px.jpg`,
                thumbUrl: `incognito-200px.jpg`,
                title: '',
                description: '',
                priority: 0,
              },
            ],
          },
        ];

        const result = reducers.portfolioReducer(initialState, {
          type: types.FETCH_PORTFOLIO_ITEMS,
          payload: {
            data: [
              {
                id: 'incognito-2',
                title: 'Incognito Logo 2',
                description:
                  'Logo for Incognito electronic events and production service',
                meta: {
                  stackDesign: false,
                  websiteUrl: '',
                  isSVG: false,
                  thumb: {
                    position: '0 100%',
                  },
                },
                category: ['logos'],
                tags: [],
                imagePaths: [
                  {
                    originalUrl: `incognito-2-original.jpg`,
                    largeUrl: `incognito-2-700px.jpg`,
                    mediumUrl: `incognito-2-450px.jpg`,
                    thumbUrl: `incognito-2-200px.jpg`,
                    title: '',
                    description: '',
                    priority: 0,
                  },
                ],
              },
              {
                id: 'incognito',
                title: 'Incognito Logo',
                description:
                  'Logo for Incognito electronic events and production service',
                meta: {
                  stackDesign: false,
                  websiteUrl: '',
                  isSVG: false,
                  thumb: {
                    position: '0 100%',
                  },
                },
                category: ['logos'],
                tags: [],
                imagePaths: [
                  {
                    originalUrl: `incognito-original.jpg`,
                    largeUrl: `incognito-700px.jpg`,
                    mediumUrl: `incognito-450px.jpg`,
                    thumbUrl: `incognito-200px.jpg`,
                    title: '',
                    description: '',
                    priority: 0,
                  },
                ],
              },
            ],
          },
        });

        expect(result).toHaveLength(3);
      });
    });
  });

  describe('FETCH_PORTFOLIO_DETAIL', () => {
    describe('with error', () => {
      test('should return initial state', () => {
        const result = reducers.portfolioReducer([], {
          type: types.FETCH_PORTFOLIO_DETAIL,
          error: true,
          payload: ['foo', 'bar'],
        });

        expect(result).toEqual([]);
      });
    });

    describe('no errors', () => {
      test('should add the new item when it does not exist in the initial state', () => {
        const initialState: Portfolio[] = [
          {
            id: 'sigma',
            title: 'Sigma Performance Group',
            description: 'sigmaperfgroup',
            meta: {
              stackDesign: false,
              websiteUrl: '',
              isSVG: false,
              thumb: {
                column: 'span 1',
                row: 'span 2',
                position: '0 100%',
              },
            },
            category: ['web'],
            tags: ['(X)HTML', 'CSS', 'Design/Branding', 'PHP'],
            imagePaths: [
              {
                originalUrl: `sigmaperfgroup-original.jpg`,
                largeUrl: `sigmaperfgroup-700px.jpg`,
                mediumUrl: `sigmaperfgroup-450px.jpg`,
                thumbUrl: `sigmaperfgroup-200px.jpg`,
                title: '',
                description: '',
                priority: 0,
              },
            ],
          },
          {
            id: 'incognito',
            title: 'Incognito Logo',
            description:
              'Logo for Incognito electronic events and production service',
            meta: {
              stackDesign: false,
              websiteUrl: '',
              isSVG: false,
              thumb: {
                position: '0 100%',
              },
            },
            category: ['logos'],
            tags: [],
            imagePaths: [
              {
                originalUrl: `incognito-original.jpg`,
                largeUrl: `incognito-700px.jpg`,
                mediumUrl: `incognito-450px.jpg`,
                thumbUrl: `incognito-200px.jpg`,
                title: '',
                description: '',
                priority: 0,
              },
            ],
          },
        ];

        const result = reducers.portfolioReducer(initialState, {
          type: types.FETCH_PORTFOLIO_DETAIL,
          payload: {
            data: {
              id: 'incognito-2',
              title: 'Incognito Logo 2',
              description:
                'Logo for Incognito electronic events and production service',
              meta: {
                stackDesign: false,
                websiteUrl: '',
                isSVG: false,
                thumb: {
                  position: '0 100%',
                },
              },
              category: ['logos'],
              tags: [],
              imagePaths: [
                {
                  originalUrl: `incognito-2-original.jpg`,
                  largeUrl: `incognito-2-700px.jpg`,
                  mediumUrl: `incognito-2-450px.jpg`,
                  thumbUrl: `incognito-2-200px.jpg`,
                  title: '',
                  description: '',
                  priority: 0,
                },
              ],
            },
          },
        });

        expect(result).toHaveLength(3);
      });

      test('should ignore the items that already exist in initial state', () => {
        const initialState: Portfolio[] = [
          {
            id: 'sigma',
            title: 'Sigma Performance Group',
            description: 'sigmaperfgroup',
            meta: {
              stackDesign: false,
              websiteUrl: '',
              isSVG: false,
              thumb: {
                column: 'span 1',
                row: 'span 2',
                position: '0 100%',
              },
            },
            category: ['web'],
            tags: ['(X)HTML', 'CSS', 'Design/Branding', 'PHP'],
            imagePaths: [
              {
                originalUrl: `sigmaperfgroup-original.jpg`,
                largeUrl: `sigmaperfgroup-700px.jpg`,
                mediumUrl: `sigmaperfgroup-450px.jpg`,
                thumbUrl: `sigmaperfgroup-200px.jpg`,
                title: '',
                description: '',
                priority: 0,
              },
            ],
          },
          {
            id: 'incognito',
            title: 'Incognito Logo',
            description:
              'Logo for Incognito electronic events and production service',
            meta: {
              stackDesign: false,
              websiteUrl: '',
              isSVG: false,
              thumb: {
                position: '0 100%',
              },
            },
            category: ['logos'],
            tags: [],
            imagePaths: [
              {
                originalUrl: `incognito-original.jpg`,
                largeUrl: `incognito-700px.jpg`,
                mediumUrl: `incognito-450px.jpg`,
                thumbUrl: `incognito-200px.jpg`,
                title: '',
                description: '',
                priority: 0,
              },
            ],
          },
        ];

        const result = reducers.portfolioReducer(initialState, {
          type: types.FETCH_PORTFOLIO_DETAIL,
          payload: {
            data: {
              id: 'incognito',
              title: 'Incognito Logo',
              description:
                'Logo for Incognito electronic events and production service',
              meta: {
                stackDesign: false,
                websiteUrl: '',
                isSVG: false,
                thumb: {
                  position: '0 100%',
                },
              },
              category: ['logos'],
              tags: [],
              imagePaths: [
                {
                  originalUrl: `incognito-original.jpg`,
                  largeUrl: `incognito-700px.jpg`,
                  mediumUrl: `incognito-450px.jpg`,
                  thumbUrl: `incognito-200px.jpg`,
                  title: '',
                  description: '',
                  priority: 0,
                },
              ],
            },
          },
        });

        expect(result).toHaveLength(2);
      });
    });
  });
});
