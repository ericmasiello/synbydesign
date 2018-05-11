/// <reference path="../serviceworker.d.ts" />
import {
  composeCacheName,
  deleteInactiveCaches,
  getMatchingCachedResponseWithCache,
  cacheResponseWithCache,
  respondWithFallbackFromCache,
} from './utils/swCache';
import { FONT_URL } from './styles/vars';

const CACHE_VERSION = 2;
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
  'https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2', // 600
  'https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2', // 400
  'https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2', // 300
  'https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2', // 700
  'https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXiWtFCc.woff2', // 400
  // store images
  OFFLINE_IMAGE_PLACEHOLDER,
  // store the home page
  HOMEPAGE,
  // store favicon
  '/favicon.ico',
];

self.addEventListener('install', (e: Event) => {
  const event = e as ServiceWorkerEvent;
  (event as ExtendableEvent).waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHED_FILES);
    }),
  );
});

self.addEventListener('fetch', (e: Event) => {
  const event = e as ServiceWorkerEvent;
  const acceptHeaders = event.request.headers.get('accept');
  const requestURL = new URL(event.request.url);

  // Images
  // return immediately if value is cached
  // else make a network request and cache response
  // else return fall back image
  if (acceptHeaders && acceptHeaders.includes('image/')) {
    return event.respondWith(
      getMatchingCachedResponse(event.request).then(
        res =>
          res ||
          fetch(event.request)
            .then(cacheResponse(event.request))
            .catch(fallbackImage),
      ),
    );
  }

  // Ajax requests
  // make fetch request to network
  // if online, return response and cache response
  // else, attempt to return response from cache
  if (acceptHeaders && acceptHeaders.includes('application/json')) {
    return event.respondWith(
      fetch(event.request)
        .then(res => {
          cacheResponse(event.request)(res);
          return res.clone();
        })
        .catch(() => {
          return getMatchingCachedResponse(event.request);
        }),
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
      getMatchingCachedResponse(event.request).then(res => {
        // update cache in the event the response has been modified
        // since last caching
        fetch(event.request).then(cacheResponse(match));
        return res;
      }),
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
      fetch(event.request).catch(err => {
        return getMatchingCachedResponse(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return caches.match(HOMEPAGE);
        });
      }),
    );
  }
});

self.addEventListener('activate', (e: Event) => {
  const event = e as ServiceWorkerEvent;
  event.waitUntil(deleteInactiveCaches(CACHE_NAME));
});
