export const CACHE_PREFIX = 'syn-cache-v';

export const composeCacheName = (version: number) =>
  `${CACHE_PREFIX}${version}`;

export const fallbackFromCache = (activeCacheName: string) => (
  event: ServiceWorkerEvent,
  cachedFallbackResponsePath: string,
) => {
  return caches.open(activeCacheName).then(cache => {
    return cache.match(event.request).then(cacheResponse => {
      return (
        cacheResponse ||
        fetch(event.request)
          .then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => {
            return cache.match(cachedFallbackResponsePath);
          })
      );
    });
  });
};

export const deleteInactiveCaches = (activeCacheName: string) => {
  return caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => {
        if (
          activeCacheName !== cacheName &&
          cacheName.startsWith(CACHE_PREFIX)
        ) {
          return caches.delete(cacheName);
        }
        return false;
      }),
    );
  });
};
