/// <reference path="../serviceworker.d.ts" />
import { composeCacheName, CACHE_PREFIX } from './utils/swCache';

const CACHE_VERSION = 1;
const CACHE_NAME = composeCacheName(CACHE_VERSION);

interface ServiceWorkerEvent extends ExtendableEvent {
  request: Request;
  respondWith: (arg: Promise<any>) => void;
}

// serviceWorkerOption is made available globally
// via 'serviceworker-webpack-plugin'
// @ts-ignore
const WEBPACK_BUNDLES: string[] = serviceWorkerOption.assets;

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
      return caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        // @ts-ignore
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('/offline.html');
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