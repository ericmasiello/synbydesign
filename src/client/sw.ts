/// <reference path="../serviceworker.d.ts" />
import {
  composeCacheName,
  fallbackFromCache,
  deleteInactiveCaches,
} from './utils/swCache';
import { FONT_URL } from './styles/vars';

const CACHE_VERSION = 1;
const CACHE_NAME = composeCacheName(CACHE_VERSION);
const OFFLINE_IMAGE_PLACEHOLDER = '/offline.svg';
const fallback = fallbackFromCache(CACHE_NAME);

const WEBPACK_BUNDLES: string[] = [
  // serviceWorkerOption is made available globally
  // via 'serviceworker-webpack-plugin'
  // @ts-ignore
  ...serviceWorkerOption.assets,
  FONT_URL,
  OFFLINE_IMAGE_PLACEHOLDER,
  '/', // store the home page
];

self.addEventListener('install', (e: Event) => {
  const event = e as ServiceWorkerEvent;
  (event as ExtendableEvent).waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(WEBPACK_BUNDLES);
    }),
  );
});

self.addEventListener('fetch', (e: Event) => {
  const event = e as ServiceWorkerEvent;
  const requestURL = new URL(event.request.url);
  if (requestURL.href.includes('cloudfront')) {
    event.respondWith(fallback(event, OFFLINE_IMAGE_PLACEHOLDER));
  } else {
    // TODO: possibly make this handling more specific to actual pages using the
    // pattern of inspecting the requestURL.pathname or href and seeing if they match
    // '/' or '/portfolio/*'
    // It might be wise to locally cache '/' but then create a fallback template for
    // handling all other pages that do not include the server rendered React - this
    // will avoid the client side error that the server generated html and client side
    // React don't match
    event.respondWith(
      fetch(event.request).catch(() => {
        console.log('-------------');
        console.log('failing to fetch', event.request);
        return caches.match(event.request).then(response => {
          console.log(
            'was response found in cache for',
            event.request,
            '? response = ',
            response,
          );
          if (response) {
            return response;
          }
          console.log(
            'headers for',
            event.request,
            // @ts-ignore
            event.request.headers.get('accept').includes('text/html'),
          );
          // @ts-ignore
          if (event.request.headers.get('accept').includes('text/html')) {
            const offline = caches.match('/');
            console.log('returning offline', offline);
            return offline;
          }
        });
      }),
    );
  }
});

self.addEventListener('activate', (e: Event) => {
  const event = e as ServiceWorkerEvent;
  event.waitUntil(deleteInactiveCaches(CACHE_NAME));
});
