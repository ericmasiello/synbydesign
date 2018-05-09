export const CACHE_PREFIX = 'syn-cache-v';

export const composeCacheName = (version: number) =>
  `${CACHE_PREFIX}${version}`;

export const getMatchingCachedResponseWithCache = (activeCacheName: string) => (
  req: Request | string,
) => caches.open(activeCacheName).then(cache => cache.match(req));

export const cacheResponseWithCache = (activeCacheName: string) => (
  req: Request | string,
) => (res: Response) =>
  caches.open(activeCacheName).then(cache => {
    cache.put(req, res.clone());
    return res;
  });

export const respondWithFallbackFromCache = (activeCacheName: string) => (
  fallbackPath: string,
) => () =>
  caches.open(activeCacheName).then(cache => cache.match(fallbackPath));

export const deleteInactiveCaches = (activeCacheName: string) =>
  caches.keys().then(cacheNames =>
    Promise.all(
      cacheNames.map(cacheName => {
        if (
          activeCacheName !== cacheName &&
          cacheName.startsWith(CACHE_PREFIX)
        ) {
          return caches.delete(cacheName);
        }
        return false;
      }),
    ),
  );
