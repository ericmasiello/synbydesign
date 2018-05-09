import * as swCache from '../swCache';

describe('composeCacheName', () => {
  it('composes a cache name based on a version number', () => {
    const result = swCache.composeCacheName(42);

    expect(result).toEqual('syn-cache-v42');
  });
});

describe('getMatchingCachedResponseWithCache', () => {
  const mockCache = {
    match: jest.fn().mockImplementation(() => Promise.resolve('the match')),
  };

  beforeEach(() => {
    mockCache.match.mockClear();

    // @ts-ignore
    window.caches = {
      open: jest.fn().mockImplementation(() => Promise.resolve(mockCache)),
    };
  });

  test('it opens the cache', async () => {
    const mockCacheName = 'myMockCache';
    const partial = swCache.getMatchingCachedResponseWithCache(mockCacheName);
    await partial('/foo');

    expect(window.caches.open).toBeCalledWith(mockCacheName);
  });

  test('it checks for a match', async () => {
    const mockCacheName = 'myMockCache';
    const partial = swCache.getMatchingCachedResponseWithCache(mockCacheName);
    const result = await partial('/foo');

    expect(mockCache.match).toBeCalledWith('/foo');
    expect(result).toEqual('the match');
  });
});

describe('cacheResponseWithCache', () => {
  const mockCache = {
    put: jest.fn(),
  };

  beforeEach(() => {
    mockCache.put.mockClear();

    // @ts-ignore
    window.caches = {
      open: jest.fn().mockImplementation(() => Promise.resolve(mockCache)),
    };
  });

  test('it opens the cache', async () => {
    const mockCacheName = 'myMockCache';
    // @ts-ignore
    const mockRes = {
      clone: jest.fn(),
    } as Response;
    await swCache.cacheResponseWithCache(mockCacheName)('/foo')(mockRes);

    expect(window.caches.open).toBeCalledWith(mockCacheName);
  });

  it('it clones the request and puts it in the cache', async () => {
    const mockCacheName = 'myMockCache';
    // @ts-ignore
    const mockRes = {
      clone: jest.fn().mockReturnValue('cloned response'),
    } as Response;
    await swCache.cacheResponseWithCache(mockCacheName)('/foo')(mockRes);

    expect(mockCache.put).toBeCalledWith('/foo', 'cloned response');
  });

  it('returns the response object', async () => {
    const mockCacheName = 'myMockCache';
    // @ts-ignore
    const mockRes = {
      clone: jest.fn().mockReturnValue('cloned response'),
    } as Response;
    const result = await swCache.cacheResponseWithCache(mockCacheName)('/foo')(
      mockRes,
    );

    expect(result).toEqual(mockRes);
  });
});

describe('respondWithFallbackFromCache', () => {
  const mockCache = {
    match: jest.fn().mockImplementation(() => Promise.resolve('the match')),
  };

  beforeEach(() => {
    mockCache.match.mockClear();

    // @ts-ignore
    window.caches = {
      open: jest.fn().mockImplementation(() => Promise.resolve(mockCache)),
    };
  });

  test('it opens the cache', async () => {
    const mockCacheName = 'myMockCache';
    await swCache.respondWithFallbackFromCache(mockCacheName)('/fallback')();

    expect(window.caches.open).toBeCalledWith(mockCacheName);
  });

  test('it finds matching fallback within the cache', async () => {
    const mockCacheName = 'myMockCache';
    await swCache.respondWithFallbackFromCache(mockCacheName)('/fallback')();

    expect(mockCache.match).toBeCalledWith('/fallback');
  });

  test('it should return the matching cache value', async () => {
    const mockCacheName = 'myMockCache';
    const result = await swCache.respondWithFallbackFromCache(mockCacheName)(
      '/fallback',
    )();

    expect(result).toEqual('the match');
  });
});

describe('deleteInactiveCaches', () => {
  const inactiveCacheNames = [
    `${swCache.CACHE_PREFIX}1`,
    `${swCache.CACHE_PREFIX}2`,
    'some-other-random-cache',
    `${swCache.CACHE_PREFIX}3`,
    `${swCache.CACHE_PREFIX}5`,
  ];

  beforeEach(() => {
    // @ts-ignore
    window.caches = {
      keys: jest
        .fn()
        .mockImplementation(() => Promise.resolve(inactiveCacheNames)),
      delete: jest.fn(),
    };
  });

  test('deletes any caches with the same prefix except the active one', async () => {
    const mockActiveCacheName = `${swCache.CACHE_PREFIX}4`;
    await swCache.deleteInactiveCaches(mockActiveCacheName);

    expect((window.caches.delete as jest.Mock<{}>).mock.calls).toHaveLength(4);
    expect(window.caches.delete).toBeCalledWith(`${swCache.CACHE_PREFIX}1`);
    expect(window.caches.delete).toBeCalledWith(`${swCache.CACHE_PREFIX}2`);
    expect(window.caches.delete).toBeCalledWith(`${swCache.CACHE_PREFIX}3`);
    expect(window.caches.delete).toBeCalledWith(`${swCache.CACHE_PREFIX}5`);
    expect(window.caches.delete).not.toBeCalledWith(`${swCache.CACHE_PREFIX}4`);
    expect(window.caches.delete).not.toBeCalledWith('some-other-random-cache');
  });
});
