/// <reference path="../serviceworker.d.ts" />
import { composeCacheName, CACHE_PREFIX } from './utils/swCache';
import { FONT_URL } from './styles/vars';

const CACHE_VERSION = 1;
const CACHE_NAME = composeCacheName(CACHE_VERSION);

interface ServiceWorkerEvent extends ExtendableEvent {
  request: Request;
  respondWith: (arg: Promise<any>) => void;
}

const WEBPACK_BUNDLES: string[] = [
  // serviceWorkerOption is made available globally
  // via 'serviceworker-webpack-plugin'
  // @ts-ignore
  ...serviceWorkerOption.assets,
  FONT_URL,
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
});

self.addEventListener('activate', (e: Event) => {
  const event = e as ServiceWorkerEvent;
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (CACHE_NAME !== cacheName && cacheName.startsWith(CACHE_PREFIX)) {
            return caches.delete(cacheName);
          }
          return false;
        }),
      );
    }),
  );
});
