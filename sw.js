const CACHE_NAME = 'linux-notes-v6';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './interview.html',
  './qa-data.js',
  './case-studies-data.js',
  './career-suite-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install Event - Precache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Precaching resources');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Serve from cache with stale-while-revalidate strategy for same-origin,
// and cache-first for Google Fonts.
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Filter out non-GET requests
  if (event.request.method !== 'GET') return;

  // Cache-first for Google Fonts
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      caches.open('google-fonts').then(cache => {
        return cache.match(event.request).then(response => {
          return response || fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Stale-while-revalidate for local assets
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        // Only cache valid GET responses
        if (networkResponse.status === 200) {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      }).catch(() => {
        // Return cached response if offline and fetch fails
      });

      return cachedResponse || fetchPromise;
    })
  );
});
