/// <reference path="../serviceworker.d.ts" />
import {
  composeCacheName,
  deleteInactiveCaches,
  getMatchingCachedResponseWithCache,
  cacheResponseWithCache,
  respondWithFallbackFromCache,
} from './utils/swCache';
import { FONT_URL, FONT_FILES } from './styles/vars';

const CACHE_VERSION = process.env.SW_ID || 'UNKNOWN';
const CACHE_NAME = composeCacheName(CACHE_VERSION);
const OFFLINE_IMAGE_PLACEHOLDER = '/offline.svg';
const HOMEPAGE = '/';
const getMatchingCachedResponse = getMatchingCachedResponseWithCache(
  CACHE_NAME,
);
const cacheResponse = cacheResponseWithCache(CACHE_NAME);
const respondWithFallback = respondWithFallbackFromCache(CACHE_NAME);
const fallbackImage = respondWithFallback(OFFLINE_IMAGE_PLACEHOLDER);

const CACHED_FILES: string[] = [
  // `serviceWorkerOption` is made available globally via 'serviceworker-webpack-plugin'
  // @ts-ignore
  ...serviceWorkerOption.assets,
  // store font css and actual fonts
  FONT_URL,
  ...FONT_FILES,
  // store images
  OFFLINE_IMAGE_PLACEHOLDER,
  // store the home page
  HOMEPAGE,
  // store favicon
  '/favicon.ico',
];

self.addEventListener('install', (e: Event) => {
  skipWaiting();
  const event = e as ServiceWorkerEvent;
  (event as ExtendableEvent).waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHED_FILES);
    }),
  );
});

interface ServiceWorkerErrorPost {
  eventName: string;
  url: string;
  error: {
    stack?: string;
    message: string;
  };
}

const createPostErrorWithEvent = (event: ServiceWorkerEvent) => (
  eventName: string,
) => (error: Error) => {
  clients.matchAll().then(clients => {
    clients.forEach(client => {
      const message: ServiceWorkerErrorPost = {
        eventName,
        url: event.request.url,
        error: {
          stack: error.stack,
          message: error.message,
        },
      };
      client.postMessage(message);
    });
  });
};

self.addEventListener('fetch', (e: Event) => {
  const event = e as ServiceWorkerEvent;
  const acceptHeaders = event.request.headers.get('accept');
  const requestURL = new URL(event.request.url);
  const createPostError = createPostErrorWithEvent(event);

  // Ensure analytics and tracking requests are not cached
  if (
    requestURL.host === 'www.google-analytics.com' ||
    requestURL.host === 'www.googletagmanager.com' ||
    requestURL.host === 'cdn.logrocket.io' ||
    requestURL.host === 'r.logrocket.io'
  ) {
    return event.respondWith(fetch(event.request));
  }

  // Images
  // return immediately if value is cached
  // else make a network request and cache response
  // else return fall back image
  if (acceptHeaders && acceptHeaders.includes('image/')) {
    return event.respondWith(
      getMatchingCachedResponse(event.request)
        .then(
          res =>
            res ||
            fetch(event.request)
              .then(cacheResponse(event.request))
              .catch(fallbackImage),
        )
        .catch(createPostError('manage images')),
    );
  }

  // Ajax GET requests (POST, PUT, DELETE cannot be cached)
  // make fetch request to network
  // if online, return response and cache response
  // else, attempt to return response from cache
  if (
    acceptHeaders &&
    acceptHeaders.includes('application/json') &&
    event.request.method === 'GET'
  ) {
    return event.respondWith(
      fetch(event.request)
        .then(res => {
          cacheResponse(event.request)(res);
          return res.clone();
        })
        .catch(() => {
          return getMatchingCachedResponse(event.request);
        })
        .catch(createPostError('ajax requests')),
    );
  }

  // Values stored in CACHED_FILES
  // return immediatley with cached value
  // update the cached response with the latest network response
  if (
    CACHED_FILES.indexOf(requestURL.href) > -1 ||
    CACHED_FILES.indexOf(requestURL.pathname) > -1
  ) {
    const match =
      CACHED_FILES.indexOf(requestURL.href) > -1
        ? requestURL.href
        : requestURL.pathname;
    return event.respondWith(
      getMatchingCachedResponse(event.request)
        .then(res => {
          // update cache in the event the response has been modified
          // since last caching
          fetch(event.request)
            .then(cacheResponse(match))
            .catch(createPostError('CACHED_FILES update'));
          return res;
        })
        .catch(createPostError('CACHED_FILES request')),
    );
  }

  // TODO: It might be wise to locally cache '/' but then create a fallback template for
  // handling all other pages that do not include the server rendered React - this
  // will avoid the client side error that the server generated html and client side
  // React don't match

  // Remaining HTML pages that are not explicitly cached
  // Fetch the request from the network
  // if the network request fails, pull from cache
  // if value exists in cache, return cache
  // if value does not exist in cache, return the cached home page
  if (acceptHeaders && acceptHeaders.includes('text/html')) {
    return event.respondWith(
      fetch(event.request).catch(() => {
        return getMatchingCachedResponse(event.request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return caches.match(HOMEPAGE);
          })
          .catch(createPostError('text/html cache response'));
      }),
    );
  }
});

self.addEventListener('activate', (e: Event) => {
  const event = e as ServiceWorkerEvent;
  event.waitUntil(deleteInactiveCaches(CACHE_NAME));
});
